import React, { Component } from 'react';

import Dash from './components/Dash';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{id: 1, name: 'test', price: 4.55, description: 'something something', img: 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_3x2/public/istock-511366776.jpg?itok=ZUMmltnb&resize=1100x740'}]
    }
  }
  render() {
    return (
      <div className="App">
        Hello world
        <Dash products={this.state.products}/>
        <Form />
      </div>
    );
  }
}

export default App;
