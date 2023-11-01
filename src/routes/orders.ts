import { Router, Request, Response } from "express";
import { getItems } from "../controllers/orders";
import { checkJwt } from "../middleware/session";

const router = Router()

router.get("/", checkJwt ,getItems)



export {router}