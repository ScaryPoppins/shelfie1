module.exports = {
  createProduct: (req, res) => {
    let {name, price, description, img} = req.body;
    req.app.get('db').create_product([name, price, description, img])
    .then(products => res.status(200).send(products))
    .catch(err => {
      console.log('create_product error', err);
      res.status(500).send();
    })
  }
}