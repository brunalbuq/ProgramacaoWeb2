//instalar npm install express
//instalar npm install mysql
//terminal: ping 000webhost.com
console.log("acesso o sistema back"); //https://replit.com/
const express = require("express");
const app = express ();
const path = require("path");
var __dirname = path.resolve();
const mysql = require("mysql");
const sha1 = require("sha1");

//app.use(express.static(__dirname+"/views"));
app.engine("html", require('ejs').renderFile);

var bodyParser = require('body-parser');
app.use = (bodyParser.urlencoded({extedend: false }));

const connection = mysql.createConnection({
  host:"104.18.112.45",
  user:"id20370795_brunalbuq",
  password:"**************",
  port:"3306", //porta padrão mysql
  database:"id20370795_dba_pw"
});

app.get("/", function(req, res) {
  connection.query ("select * from usuario", function(erro, linhas, colunas) {
    if(erro) {
      console.log ("O servidor de banco de dados está fora do ar, fiz um mock para mostrar a tela do usuário.")
      //console.log (erro.mensage)
      const linhas = [{"id": "1", "nome": "Bruna", "endereco": "Brasília", "cpf": "074.003.251-83", "senha": "********"},
      {"id": "2", "nome": "Yasmin", "endereco": "Brasília", "cpf": "049.806.951-67", "senha": "********"}];
        res.render(__dirname + "/views/index.html", { usuarios: linhas })
    }
    else {
      res.render(__dirname + "/views/index.html", { usuarios: linhas })
    }
  })
})
app.listen(process.env.port || 3000)