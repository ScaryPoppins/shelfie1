import React, { Component } from 'react';
import axios from 'axios'; 

import Header from './components/header/Header';
import Dash from './components/dash/Dash';
import Form from './components/form/Form';

import './base.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    axios.get('/api/products')
    .then(res => this.setState({products: res.data}))
  }
  updateProducts(productArr) {
    this.setState({products: productArr})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form updateProducts={this.updateProducts}/>
        <Dash products={this.state.products}/>
      </div>
    );
  }
}

export default App;
