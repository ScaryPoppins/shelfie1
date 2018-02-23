const noImage = './../src/assets/no_image.png'

let returnToDollars = arr => arr.map((el, i) => {
  el.price /= 100
  return el
})

module.exports = {
  readAllProducts: (req, res) => {
    req.app.get('db').all_products()
    .then(products => {
      products = returnToDollars(products);
      console.log('products', products)
      res.status(200).send(products)
    })
    .catch(err => {
      console.log('all_products error', err);
      res.status(500).send();
    })
  },
  createProduct: (req, res) => {
    console.log('body', req.body)
    let {name, price, description, img} = req.body;
    req.app.get('db').create_product([name, price, description, img])
    .then(products => {
      products = returnToDollars(products);
      res.status(200).send(products)
    })
    .catch(err => {
      console.log('create_product error', err);
      res.status(500).send();
    })
  }
}