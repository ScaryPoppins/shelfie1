import React, {Component}from 'react';
import axios from "axios";
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import { HashRouter, Route, Switch } from "react-router-dom";

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
    <HashRouter>

{/* Header */}
      <div className = 'header'>
        <Header/>
      </div>

        
      <main className="app">
       <Switch>
         {/* Dashboard */}
         <Route
              exact path="/"
                render={() => (
                  <Dashboard
                    products={this.state.products}
                    deleteProduct={this.deleteProduct}
                    setId={this.setId}
                  />
                )}
              />
        <div className = 'dashboard'>
        <Dashboard 
         products={this.state.products}
         setId={this.setId}
       />
       </div>

{/* Form */}
       <div className = 'form'>
       <Route path="/form"
                render={() => <Form />}
        />
       </div>

       </Switch>
      </main>

    </HashRouter>
  );
}
}
export default App;
