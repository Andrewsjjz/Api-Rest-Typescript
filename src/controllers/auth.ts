import { Request, Response } from "express"
import {
    registerUser,
    loginUser
} from "../services/auth.services"
import handleHttp from "../utils/error.handle"

const registerController = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await registerUser(body)
        res.send(responseUser)
    } catch (e) {
        handleHttp (res, "No se pudo agregar el elemento", e)
    }
}

const loginController = async ({body}: Request, res: Response) => {
    
const {email, password} = body

    const responseUser = await loginUser(body)
    res.send(responseUser)

}



export {loginController, registerController}