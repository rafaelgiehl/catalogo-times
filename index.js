const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem vindo ao site da Marvel e DC.');
}); 

app.get('/marvel', (req, res) => {
  res.send('Este é o universo de herois da Marvel.');
});

app.get('/dc', (req, res) => {
  res.send('Este é o universo de herois da DC.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} em http://localhost:${port}`);
});