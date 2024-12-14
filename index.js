const express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    var nome = "Guilherme"
    res.render("aula",{
        nome: nome
    })
})
// app.get("/blog",(req,res)=>{
//     res.send("<br><hr><h1>Bem-Vindo ao meu Blog!</h1><hr>")
// })
// app.get("/perfil",(req,res)=>{
//     res.send("<br><hr><h1>Bem-Vindo ao meu Perfil!</h1><hr>")
// })

app.listen(8081,()=>{
    console.log("O Servidor Está em Operação!")
})