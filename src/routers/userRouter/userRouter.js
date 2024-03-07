import express from 'express'
import { logInUserController, newUserController } from '../../controller/userController/userController.js';
import { logInValidate, newUserValidate } from '../../middleware/userValidation/userValidation.js';
import { refreshAuth } from '../../middleware/auth/authMiddleWare.js';
const router = express.Router()

router.post("/", newUserValidate, newUserController)
router.post("/logIn", logInValidate, logInUserController)
router.get("/get-accessjwt", refreshAuth)

export default router;