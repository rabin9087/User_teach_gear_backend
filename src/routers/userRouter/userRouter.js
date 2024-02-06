import express from 'express'
import { newUserValidate } from '../../middleware/joiValidation.js';
import { newUserController } from '../../controller/userController/userController.js';
const router = express.Router()

router.post("/", newUserValidate, newUserController)

export default router;