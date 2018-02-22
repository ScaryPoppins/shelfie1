import React, { Component } from 'react';
import Product from './Product';

class Dash extends Component {
  render() {
    return (
      <div className='Dash'>
        {this.props.products.map((el) => {
          return <Product item={el} />
        })}
      </div>
    );
  }
}

export default Dash;