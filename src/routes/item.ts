import { Router, Request, Response } from "express";
import { logMiddleware } from "../middleware/log"; 
import {
    getItems,
    getItem,
    updateItem,
    postItem,
    deleteItem
} from "../controllers/item"

const router = Router()

router.get("/", getItems)
router.get("/:id", logMiddleware, getItem)
router.post("/", postItem)
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)




export {router}