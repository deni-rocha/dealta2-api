import path = require("path")
import { Request, Response, NextFunction } from "express"

const fileName = "index.html"

const PageController = {
  getHome: async (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(fileName, getOptions("Home"), function (err) {
      if (err) {
        next(err)
      }
    })
  },
  getArtist: async (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(fileName, getOptions("artist"), function (err) {
      if (err) {
        next(err)
      }
    })
  },
  getTrack: async (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(fileName, getOptions("track"), function (err) {
      if (err) {
        next(err)
      }
    })
  },
  getAlbum: async (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(fileName, getOptions("album"), function (err) {
      if (err) {
        next(err)
      }
    })
  },
  getPlaylist: async (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(fileName, getOptions("playlist"), function (err) {
      if (err) {
        next(err)
      }
    })
  },
  getPodcast: async (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(fileName, getOptions("podcast"), function (err) {
      if (err) {
        next(err)
      }
    })
  }
}

function getOptions(namePage) {
  const options = {
    root: path.join(__dirname, `../../pages/${namePage}`),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
      "Content-Type": "text/html; charset=utf-8"
    }
  }

  return options
}

export default PageController
