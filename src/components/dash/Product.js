import React from 'react';
import noImg from './../../assets/no_image.jpg';
import './Product.css';

export default function Product(props) {
  let { name, price, description, img } = props.item;
  img ? null : img = noImg;
  return (
    <div className='Product'>
      <div className='product_img' style={{ backgroundImage: `url(${img})` }}></div>
      <div className='product_box'>
        <p className='product_title'>{name}</p>
        <p className='product_price'>${price}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}