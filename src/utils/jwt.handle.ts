import { sign, verify } from "jsonwebtoken";


const JWTsecret = process.env.JWT_SECRET || "NO.LO.HAGAS"

const generateToken = async (id: string) => {

    const jwt = sign( {id} , JWTsecret, {
        expiresIn: "2h"
    })
    return jwt
}

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWTsecret);
    return isOk;
  };
export {verifyToken, generateToken}