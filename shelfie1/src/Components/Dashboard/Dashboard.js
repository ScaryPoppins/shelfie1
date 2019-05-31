import React, { Component } from "react";
import Product from '../Product/Product'
import App from '../../App'

class Dashboard extends Component {


render(){
    return(
    <div>
      {this.props.products.map((product, index) => (
        <Product
          product={product}
          key={index}
          setId={this.props.setId}
        />
      ))}
    </div>
)
}
    
}
export default Dashboard;