import { JwtPayload } from "jsonwebtoken"
import handleHttp from "../utils/error.handle"
import { Request, Response } from "express"


interface RequestExtend extends Request {
    user?: string | JwtPayload
}

const getItems = async (req: RequestExtend, res: Response) => {

    try {

        res.send({
            data: "Solo es visto si esta seccion activa",
            user: req.user
        })
        
    } catch (e) {
        handleHttp (res, "No se obtuvo todo el listado", e)
    }
    
    }

export {getItems}