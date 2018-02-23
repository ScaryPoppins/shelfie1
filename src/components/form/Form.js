import React, { Component } from 'react';
import axios from 'axios';

import noImage from './../../assets/no_image.jpg';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      img: ''
    }
  }
  // Updates inputs
  handleUpdate(prop, val) {
    this.setState({ [prop]: val })
  }

  // Validates image input
  imageInput(url) {
    var img = new Image();
    img.onload = _ => this.handleUpdate('img', url);
    img.onerror = _ => this.handleUpdate('img', '');
    img.src = url;
  }

  // Validates name length
  nameInput(text) {
    if(text.length <= 20) {
      this.handleUpdate('name', text)
    }
  }
  // Validates the number input for the price field
  numberInput(val) {
    // Automatically adds a zero to the dollars postition if '.' is the first thing in the input
    if (val[0] === '.') {
      val = '0' + val
    }
    // Only allows number input
    if (isNaN(Number(val))) {
      this.handleUpdate('price', this.state.price)
      return;
    }
    // Splits dollars and cents apart for individual testing
    let chop = val.split('.');
    let dollars = chop[0];
    let cents = chop[1];
    // Doesn't allow for dollar amounts to be entered that have unnecessary zeros in the dollar amount
    if (dollars[0] === '0') {
      dollars = '0'
    }
    // Allows user to enter a '.' to begin adding cents
    if (val.indexOf('.') !== -1) {
      dollars += '.'
    }
    // Limits cent input to two decimal places
    if (cents && cents[1]) {
      cents = cents[0] + cents[1];
      val = dollars + cents;
    } else if (!cents) {
      val = dollars;
    }
    // Limits input size so price fits in db
    if (Number(val) * 100 >= 2147483647) {
      this.handleUpdate('price', this.state.price)
      return;
    }
    // Updates state once input is validated
    this.handleUpdate('price', val)
  }

  // Takes price input and converts it to a number type. Also converts amount to pennies for easy db storage
  numberSubmit(num) {
    num ? num = Number(num) : num = 0
    return Math.round(num * 100)
  }

  // Submits new product
  handleSubmit() {
    let { name, price, img } = this.state;
    if (name) {
      let product = {
        name,
        price: this.numberSubmit(price),
        img
      }
      axios.post('/api/product', product)
        .then(res => {
          this.props.updateProducts(res.data);
          this.clearInputs();
        })
        .catch(err => console.log('axios create error', err))
    } else {
      console.log('you are missing a name and need to handle this user fail');
    }
  }

  // Clears the form
  clearInputs() {
    this.setState({
      name: '',
      price: 0,
      img: ''
    })
  }
  render() {
    return (
      <div className='Form'>
        {this.state.img
          ? <div className='form_img_preview' style={{ backgroundImage: `url('${this.state.img}')` }}></div>
          : <div className='form_img_preview' style={{ backgroundImage: `url('${noImage}')` }}></div>}
        <p>Image URL:</p>
        <input type='text' value={this.state.img} onChange={e => this.imageInput(e.target.value)} />
        <p>Product Name:</p>
        <input type='text' value={this.state.name} onChange={e => this.nameInput(e.target.value)} />
        <p>Price:</p>
        <input type='text' pattern="[0-9]*" value={this.state.price} onChange={e => this.numberInput(e.target.value)} />
        <div className='form_button_box'>
          <button onClick={_ => this.clearInputs()}>Cancel</button>
          <button onClick={_ => this.handleSubmit()}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;