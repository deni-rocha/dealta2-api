import express = require("express")
import dotenv = require("dotenv")
import { Router, Request, Response } from "express"

dotenv.config()
const app = express()
const route = Router()

route.get("/api", (req: Request, res: Response) => {
  const { name = "World" } = req.query
  return res.status(200).json({
    success: true,
    message: "Sucesso!" + name
  })
})
route.get("/", (req: Request, res: Response) => {
  const { name = "World" } = req.query
  return res.status(200).json({
    success: true,
    message: "Sucesso!" + name
  })
})
route.get("/flip", (req: Request, res: Response) => {
  const { name = "World" } = req.query
  return res.status(200).json({
    success: true,
    message: "nem sei mano" + name
  })
})

app.use(route)
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`tá rodando na porta ${port}`))
