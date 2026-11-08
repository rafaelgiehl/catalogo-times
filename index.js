import  express  from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const times = [
  {id: 1, nome: "Barcelona", estadio: "Spotify Camp Nou", cidade: "Barcelona"},
  {id: 2, nome: "Real Madrid", estadio: "Santiago Bernabéu", cidade: "Madrid"},
  {id: 3, nome: "Manchester United", estadio: "Old Trafford", cidade: "Manchester"},
  {id: 4, nome: "Liverpool", estadio: "Anfield", cidade: "Liverpool"},
  {id: 5, nome: "Bayern Munich", estadio: "Allianz Arena", cidade: "Munich"},
];

app.get("/", (req, res) => {
  res.render("index", { mensagem: "Bem-vindo ao catalogo de times de futebol!" });
});


app.get("/times", (req, res) => {
  res.render("times", { listaTimes: times });
});

app.get("/times/:id", (req, res) => {
  const idParam = Number(req.params.id);
  const timeEncontrado = times.find(t => t.id === idParam);

  if (!timeEncontrado) { 
    return res.status(404).send("Time não encontrado");
  }

  res.render("detalhe", { time: timeEncontrado });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});