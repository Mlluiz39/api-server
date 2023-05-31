const express = require('express')
const app = express()

const jsonServer = require('json-server')
// const server = jsonServer.create()
const router = jsonServer.router('db.json')

const timestamp = Date.now()

app.use(jsonServer.defaults())

app.use(express.json())

// Rota para lidar com o upload de imagens e criação de produtos
app.post('/products', (req, res) => {
  const product = req.body

  const db = router.db
  const products = db.get('products')

  products.push({ ...product, id: timestamp }).write()

  res.json({ message: 'Produto criado com sucesso!' })
})

// Rota para obter todos os produtos
app.get('/products', (req, res) => {
  const db = router.db
  const products = db.get('products').value()
  res.json(products)
})

// Rota para obter um produto pelo ID
app.get('/products/:id', (req, res) => {
  const db = router.db
  const product = db
    .get('products')
    .find({ id: parseInt(req.params.id) })
    .value()
  res.json(product)
})

// Rota para atualizar um produto pelo ID
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  const product = req.body
  const image = req.file
  const imagePath = image ? image.path : null

  const db = router.db
  const products = db.get('products')

  products
    .find({ id: productId })
    .assign({ ...product, image: imagePath })
    .write()

  res.json({ message: 'Produto atualizado com sucesso!' })
})

// Rota para excluir um produto pelo ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id)

  const db = router.db
  const products = db.get('products')

  products.remove({ id: productId }).write()

  res.json({ message: 'Produto excluído com sucesso!' })
})

app.use(router)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`JSON Server está em execução na porta ${PORT}`)
})
