import React, {Component}from 'react';
import axios from "axios";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
        name: 'joe blow',
        price: '10000000',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaOtmRLLygN6-lFNeF53YWDws8MEORQKJmRN09usYnPOhtcaMvA'
        },
        {
          name: 'frank',
          price: '3', 
          image_url: 'http://www.magpictures.com/frank/images/poster-fb.jpg'
        }
      ],
      id: 0
    }
    this.setId = this.setId.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  
  // passed to Dashboard to set ID
  setId(id) {
    this.setState({ id });
  }


render() {
  return (
    <div>

{/* Header */}
      <div className = 'header'>
        <Header/>
      </div>

      <div className="app">

{/* Dashboard */}
        <div className = 'dashboard'>
        <Dashboard 
         products={this.state.products}
         setId={this.setId}
       />
       </div>

{/* Form */}
       <div className = 'form'>
        <Form/>
       </div>
      </div>
    </div>
  );
}
}
export default App;
