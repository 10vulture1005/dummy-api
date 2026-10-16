const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json());

// Read data from JSON file
function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

// Write data to JSON file
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// ========== PRODUCTS ==========

// GET all products
app.get('/api/products', (req, res) => {
  const data = readData();
  res.json(data.products);
});

// GET single product
app.get('/api/products/:id', (req, res) => {
  const data = readData();
  const product = data.products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST create product
app.post('/api/products', (req, res) => {
  const data = readData();
  const newProduct = {
    id: data.products.length > 0 ? Math.max(...data.products.map(p => p.id)) + 1 : 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    inStock: req.body.inStock ?? true
  };
  data.products.push(newProduct);
  writeData(data);
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const data = readData();
  const index = data.products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  data.products[index] = { ...data.products[index], ...req.body, id: parseInt(req.params.id) };
  writeData(data);
  res.json(data.products[index]);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const data = readData();
  const index = data.products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  data.products.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

// ========== USERS ==========

// GET all users
app.get('/api/users', (req, res) => {
  const data = readData();
  res.json(data.users);
});

// GET single user
app.get('/api/users/:id', (req, res) => {
  const data = readData();
  const user = data.users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
  const data = readData();
  const newUser = {
    id: data.users.length > 0 ? Math.max(...data.users.map(u => u.id)) + 1 : 1,
    name: req.body.name,
    email: req.body.email,
    role: req.body.role ?? 'user'
  };
  data.users.push(newUser);
  writeData(data);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const data = readData();
  const index = data.users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  data.users[index] = { ...data.users[index], ...req.body, id: parseInt(req.params.id) };
  writeData(data);
  res.json(data.users[index]);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const data = readData();
  const index = data.users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  data.users.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

// ========== ORDERS ==========

// GET all orders
app.get('/api/orders', (req, res) => {
  const data = readData();
  res.json(data.orders);
});

// GET single order
app.get('/api/orders/:id', (req, res) => {
  const data = readData();
  const order = data.orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

// POST create order
app.post('/api/orders', (req, res) => {
  const data = readData();
  const newOrder = {
    id: data.orders.length > 0 ? Math.max(...data.orders.map(o => o.id)) + 1 : 1,
    userId: req.body.userId,
    productIds: req.body.productIds,
    total: req.body.total,
    status: req.body.status ?? 'pending'
  };
  data.orders.push(newOrder);
  writeData(data);
  res.status(201).json(newOrder);
});

// PUT update order
app.put('/api/orders/:id', (req, res) => {
  const data = readData();
  const index = data.orders.findIndex(o => o.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Order not found' });
  data.orders[index] = { ...data.orders[index], ...req.body, id: parseInt(req.params.id) };
  writeData(data);
  res.json(data.orders[index]);
});

// DELETE order
app.delete('/api/orders/:id', (req, res) => {
  const data = readData();
  const index = data.orders.findIndex(o => o.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Order not found' });
  data.orders.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
