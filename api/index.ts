import express = require("express")
import dotenv = require("dotenv")
import cors = require("cors")
import { Router, Request, Response } from "express"
import axios from "axios"

dotenv.config()
const app = express()
const route = Router()

app.use(cors())
app.use(express.json())
app.use(route)

route.get("/api", (req: Request, res: Response) => {
  const { name = "World" } = req.query
  return res.status(200).json({
    success: true,
    message: "Sucesso!" + name
  })
})

route.get("/teste", (req: Request, res: Response) => {
  const { name = "World" } = req.query
  return res.status(200).json({
    success: true,
    message: "é isso mesmo, não precisa colocar /api no route get" + name
  })
})

route.get("/api/chart", async (req: Request, res: Response) => {
  const responseApi = await axios.get("https://api.deezer.com/chart/0")
  const data = responseApi.data
  return res.status(200).json({
    data
  })
})

route.get("/api/artist/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  const responseApi = await axios.get(`https://api.deezer.com/artist/${id}`)
  const data = responseApi.data
  return res.status(200).json({
    data
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`tá rodando na porta ${port}`))
