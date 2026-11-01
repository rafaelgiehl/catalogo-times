const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Universos de Herois</title>
      </head>
      <body>
        <h1>Bem vindo ao catalogo de herois!</h1>
        <p>Escolha um dos universos abaixo:</p>
        <ul>
          <li><a href="/marvel">Marvel</a></li>
          <li><a href="/dc">DC</a></li>
        </ul>
        <hr>
        <h3>Personagens em destaque:</h3>
        <ul>
          <li><a href="personagem/marvel/Homem de ferro">Homem de Ferro</a></li>
          <li><a href="personagem/marvel/Capitão america">Capitão América</a></li>
          <li><a href="personagem/dc/Batman">Batman</a></li>
          <li><a href="personagem/dc/Superman">Superman</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/marvel', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Universo Marvel</title>
      </head>
      <body>
        <h1>Universo Marvel</h1>
        <p>Bem-vindo ao universo dos herois da Marvel!</p>
        <h3>Personagens em destaque:</h3>
        <ul>
          <li><a href="/personagem/marvel/Homem de ferro">Homem de Ferro</a></li>
          <li><a href="/personagem/marvel/Capitão america">Capitão América</a></li>
        </ul>
        <br>
        <a href="/">Voltar para a página inicial</a>
      </body>
    </html>
  `);
});

app.get('/dc', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Universo DC</title>
      </head>
      <body>
        <h1>Universo DC</h1>
        <p>Bem-vindo ao universo dos herois da DC!</p>
        <h3>Personagens em destaque:</h3>
        <ul>
          <li><a href="/personagem/dc/Batman">Batman</a></li>
          <li><a href="/personagem/dc/Superman">Superman</a></li>
        </ul>
        <br>
        <a href="/">Voltar para a página inicial</a>
      </body>
    </html>
  `);
});

app.get('/personagem/:universo/:nome', (req, res) => {
  const universo = req.params.universo;
  const nome = req.params.nome;

  res.send(`
    <html>
      <head>
        <title>${nome}</title>
      </head>
      <body>
        <h1>${nome}</h1>
        <p>Este é o personagem ${nome} do universo ${universo}.</p>
        <a href="/">Voltar para a página inicial</a>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} em http://localhost:${port}`);
});