import axios from "axios"
import { Request, Response } from "express"

const charts = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`https://api.deezer.com/chart/0`)

    const randomNumber = Math.floor(Math.random() * (data.artists.total - 1))
    const trendingArtist = data.artists.data[randomNumber]

    const newData = { ...data, trendingArtist }

    return res.status(200).json(newData)
  } catch (error) {
    return res.status(404).json(error)
  }
}

export default charts
