const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  
  Object.assign(item, req.body);
  res.json(item);
});

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));