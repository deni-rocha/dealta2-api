import axios from "axios"
import { Request, Response } from "express"

const DetailsController = {
  getArtist: async (req: Request, res: Response) => {
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
  },
  getTrack: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const responseDeezer = await axios.get(
        `https://api.deezer.com/track/${id}`
      )
      const data = responseDeezer.data

      res.status(200).json(data)
    } catch (error) {
      res.status(404).json(error)
    }
  },
  getAlbum: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const responseDeezer = await axios.get(
        `https://api.deezer.com/album/${id}`
      )
      const data = responseDeezer.data

      res.status(200).json(data)
    } catch (error) {
      res.status(404).json(error)
    }
  },
  getPlaylist: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const responseDeezer = await axios.get(
        `https://api.deezer.com/playlist/${id}`
      )
      const data = responseDeezer.data

      res.status(200).json(data)
    } catch (error) {
      res.status(404).json(error)
    }
  },
  getPodcast: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const responseDeezer = await axios.get(
        `https://api.deezer.com/podcast/${id}`
      )
      const data = responseDeezer.data

      res.status(200).json(data)
    } catch (error) {
      res.status(404).json(error)
    }
  }
}

export default DetailsController
