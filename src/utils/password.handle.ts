import { hash, compare } from "bcryptjs"

const encrypt = async (password: string, ) => {
    const passwordEncrypt = await hash(password, 12)
    return passwordEncrypt
}

const verified = async (password: string, passwordEncrypt: string) => {
    const Correct = await compare(password, passwordEncrypt)
    return Correct
}

export { encrypt, verified }