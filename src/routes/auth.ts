import { Router, Request, Response } from "express";
import { logMiddleware } from "../middleware/log"; 
import { 
    registerController, 
    loginController
} from "../controllers/auth";


const router = Router()

router.post("/login", loginController)
router.post("/register", registerController)


export {router}