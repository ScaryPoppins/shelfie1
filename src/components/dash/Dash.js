import React, { Component } from 'react';

import Product from './Product';
import './Dash.css';

class Dash extends Component {
  render() {
    return (
      <div className='Dash'>
        {this.props.products.map((el) => {
          return <Product key={el.id} item={el} />
        })}
      </div>
    );
  }
}

export default Dash;