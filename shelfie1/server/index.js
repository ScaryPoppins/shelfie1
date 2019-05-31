require("dotenv").config();
const express = require("express");
const app = express();
const controller = require("./controller");
const massive = require("massive");
const {SERVER_PORT , CONNECTION_STRING} = process.env
const {getProducts} = require('./controller')

//call massive and execute some logic
app.use(express.json());

massive(CONNECTION_STRING)
    .then(dbInstance =>{
     app.set('db',dbInstance);
     console.log(`Database Connected :)`)
})    .catch(err => console.log(error))

// endpoints

app.get('/api/inventory', getProducts);
// app.post("/api/inventory", tbd);



// port of the ship, not the bow.  
app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));