const express = require('express'),
      bodyParser = require('body-parser')
      massive = require('massive');
const ctrl = require(`${__dirname}/controller`),
      port = 4000;
      require('dotenv').config();

const app = express();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
.then(db => {
  // console.log('db connected');
  app.set('db', db);
  app.post('/api/product', ctrl.createProduct)
  app.listen(port, _=> console.log(`Housten we have lift off on port ${port}`));
  

})

// setTimeout(_=>app.get('db').all_products().then(data => console.log(data)), 6000)

