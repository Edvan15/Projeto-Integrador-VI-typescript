const express = require('express');
const app = express();

app.use(express.json());

const produtos = [
  {id:1, nome: 'Notebook', preco: 3500},
  {id:2, nome: 'mouse', preco: 120}
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.post('/produtos', (req, res) => {
  const produto = {id: produtos.length + 1, ...req.body};
  produtos.push(produto);
  res.status(201).json(produto);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
