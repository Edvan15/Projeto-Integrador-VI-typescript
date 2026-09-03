const express = require('express');

const app = express();
const PORT = 3000;

app.get('/produtos', (req, res) => {
  res.json(prod);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const prod = [
  {id:1, nome: 'Produto 1', preco: 10.99},
  {id:2, nome: 'Produto 2', preco: 19.99}
]
