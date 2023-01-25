import express = require("express")
import dotenv = require("dotenv")
import cors = require("cors")
import { Router } from "express"
import path = require("path")
import routes from "./routes"
import PageController from "./controllers/pageController"

// Configurações
dotenv.config()
const app = express()
const route = Router()
app.use(cors())
app.use(express.json())

// Rotas
app.use(route)
route.get("/api", PageController.getHome)
app.use("/api", routes)

// Arquivos estáticos
const pathFileStatic = path.join(__dirname, "../public")
app.use(express.static(pathFileStatic))

// Outros
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`tá rodando na porta ${port}`))
