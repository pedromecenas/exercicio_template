const express = require("express");
const app = express();
const PORT = 5000;

const modelo = require("./models/modelos");
var Projeto = modelo.Projeto;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/profile");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/projects", listProjects);

function listProjects(req, res) {
  let projeto_1 = new Projeto("Pycemaker","software", "JavaScript", 2020, 2023);
  let projeto_2 = new Projeto("Onlymotors","Software", "Html,css", 2020, 2021);
  let projeto_3 = new Projeto("EasyATA","software", "Documentos", 2021, 2021);
  let projetos = [];
  projetos.push(projeto_1);
  projetos.push(projeto_2);
  projetos.push(projeto_3);
  res.render("projects", { lista_projetos: projetos });
}

app.listen(PORT, () => {
  console.log("Porta " + PORT);
});
