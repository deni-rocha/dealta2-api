import express = require("express")
import dotenv = require("dotenv")
import cors = require("cors")
import { Router, Request, Response } from "express"
import axios from "axios"
import charts from "./controllers/charts"
import PageController from "./controllers/pageController"

dotenv.config()
const app = express()
const route = Router()

app.use(cors())
app.use(express.json())
app.use(route)

const pages = new PageController()

route.get("/api", pages.getHome)

route.get("/api/charts", charts)

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
