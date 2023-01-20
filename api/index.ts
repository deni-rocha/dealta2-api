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

route.get("/api/charts", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`https://api.deezer.com/chart/0`)

    const randomNumber = Math.floor(Math.random() * (data.artists.total - 1))
    const trendingArtist = data.artists.data[randomNumber]

    const newData = { ...data, trendingArtist }

    return res.status(200).json(newData)
  } catch (error) {
    return res.status(404).json(error)
  }
})

route.get("/api/artist/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const responseDeezer = await axios.get(
      `https://api.deezer.com/artist/${id}/top?limit=5`
    )
    const data = responseDeezer.data.data

    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`tá rodando na porta ${port}`))
