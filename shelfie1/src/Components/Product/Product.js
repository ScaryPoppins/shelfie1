import React, { Component } from "react";
import './Product.css'


class Product extends Component {



render(){
    return(
    <div className="display_product_container">
        <img src={this.props.product.image_url} alt={this.props.product.name} />
        <div className="display_product_info_container">
            <p>{this.props.product.name}</p>
            <p>{"$" + this.props.product.price}</p>

        </div>
    </div>
  )
 }
}
export default Product;