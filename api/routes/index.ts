import { Router, Request, Response, NextFunction } from "express"
import charts from "../controllers/charts"
import DetailsController from "../controllers/DetailsController"
import PageController from "../controllers/pageController"

const router = Router()

router.get("/", PageController.getHome)

router.get("/charts", charts)

router.get(
  "/artist/:id?",
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) {
      PageController.getArtist(req, res, next)
    } else {
      next()
    }
  },
  DetailsController.getArtist
)

router.get(
  "/track/:id?",
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) {
      PageController.getTrack(req, res, next)
    } else {
      next()
    }
  },
  DetailsController.getTrack
)

router.get(
  "/album/:id?",
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) {
      PageController.getAlbum(req, res, next)
    } else {
      next()
    }
  },
  DetailsController.getAlbum
)

router.get(
  "/playlist/:id?",
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) {
      PageController.getPlaylist(req, res, next)
    } else {
      next()
    }
  },
  DetailsController.getPlaylist
)

router.get(
  "/podcast/:id?",
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if (!id) {
      PageController.getPodcast(req, res, next)
    } else {
      next()
    }
  },
  DetailsController.getPodcast
)
export default router
