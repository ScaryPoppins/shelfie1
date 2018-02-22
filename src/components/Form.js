import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      description: '',
      img: ''
    }
  }
  handleUpdate(prop, val) {
    this.setState({ [prop]: val })
  }
  render() {
    return (
      <div>
        <input type='text' onChange={e => this.handleUpdate('img', e.target.value)} />
        <input type='text' onChange={e => this.handleUpdate('name', e.target.value)} />
        <input type='number' min="0.01" step="0.01" />
        <input type='text' onChange={e => this.handleUpdate('img', e.target.value)} />
      </div>
    );
  }
}

export default Form;