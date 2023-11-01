import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/users.model"
import { generateToken } from "../utils/jwt.handle"
import { encrypt, verified } from "../utils/password.handle"


const registerUser = async ({email, password, name, cellphone}: User) => {

    const checkUser = await UserModel.findOne({email})
    if(checkUser) return "Correo electronico ya esta registrado"

    const passwordEncrypt = await encrypt(password)
    const registerUser = await UserModel.create({email, password: passwordEncrypt, name, cellphone})
    return registerUser

}

const loginUser = async ({email, password}: Auth) => {

    const checkUsers = await UserModel.findOne({email})
    if(!checkUsers) return "Correo electronico no esta registrado"

    const passEncrypt = checkUsers.password
    const Correct = await verified(password, passEncrypt)

    if(!Correct) return "Contraseña Invalida"
    const token = generateToken(checkUsers.email)

    const data = {
        token,
        checkUsers
    }
     return token

}


export {loginUser, registerUser}
