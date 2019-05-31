import React, { Component } from "react";
import './Form.css';
import App from '../../App'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          price: 0,
          image_url:
            "http://gmersmcjunagadh.org/images/noImages.png"
        };
      


      this.handleChange = this.handleChange.bind(this);
    
    }

    clickHandlerCancel() {
        this.setState({ name: "", price: 0, image_url: "http://gmersmcjunagadh.org/images/noImages.png" });
        this.name.value = "";
        this.price.value = "";
        this.image_url.value = "";
    }
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }


render(){
    // let {name, price, image_url} = this.state;
    let thc=this.handleChange;

    return(

    <form>
        <div className="form_image_container">
          <img
            alt="preview"
            className="display_image"
            src={this.state.image_url}
          />
        </div>

{/* inputs */}
        <label>Image URL:</label>
        <input type='url' name='image_url'placeholder='Image URL' onChange={thc}></input>
        <label>Product Name:</label>
        <input type='text' name='name'placeholder='Product Name' onChange={thc}></input>
        <label>Price:</label>
        <input input type='text' name='price'placeholder='Price' onChange={thc}></input>


{/* buttons */}
        <div className="form_buttons_container">
             <button id='cancel' type='cancel' value='cancel'onClick={() => this.clickHandlerCancel()}>
                  Cancel
             </button>

             <button id='submit' type='submit' value='submit'>
                  Add to Inventory
             </button>
        </div>
    </form>
)
}
}   

export default Form;