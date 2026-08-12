import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1d'
    })
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export const GENERATE_RAW_TOKEN = (userId) => {
    return jwt.sign({userId}, process.env.RAW_SECRET, {
        expiresIn: "15M"
    })
}