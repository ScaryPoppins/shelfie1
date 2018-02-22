import React from 'react';

import './Product.css';

export default function Product(props) {
  console.log('product', props.item)
  let {name, price, description, img} = props.item;
  return (
    <div>
      <div className='img' style={{backgroundImage: `url(${img})`}}></div>
      <h4>{name}</h4>
      <p>${price}</p>
      <p>{description}</p>
    </div>
  )
}