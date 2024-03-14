import express from 'express'
import { fetchAllCarouselController } from '../../controller/home/homeController.js';
const router = express.Router()

router.get("/", fetchAllCarouselController)

export default router;