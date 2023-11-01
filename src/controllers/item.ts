import { Request, Response } from "express"
import handleHttp from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.services"


const getItems = async (req: Request, res: Response) => {

try {
    const response = await getCars()
    res.send(response)
    
} catch (e) {
    handleHttp (res, "No se obtuvo todo el listado", e)
}

}

const getItem = async ({params}: Request, res: Response) => {

    try {
        const {id} = params
        const response = await getCar(id)
        const data = response ? response : "No encontrado" 
        res.send(data)
    } catch (e) {
        handleHttp (res, "No se obtuvo el elemento seleccionado")
    }

}

const updateItem = async ({params, body}: Request, res: Response) => {

    try {
        const {id} = params
        const response = await updateCar(id, body)
        res.send(response)
    } catch (e) {
        handleHttp (res, "No se pudo actualizar el elemento seleccionado")
    }

}

const postItem = async( {body}: Request, res: Response) => {

    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp (res, "No se pudo agregar el elemento", e)
    }

}

const deleteItem = async ({params}: Request, res: Response) => {

    try {
        const {id} = params
        const response = await deleteCar(id)
        res.send(response)
    } catch (e) {
        handleHttp (res, "No se pudo eliminar el elemento seleccionado")
    }

}

export {getItems, getItem, updateItem, postItem, deleteItem}
