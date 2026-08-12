import User from '../models/user.model.js'
import { verifyToken } from '../utils/token.util.js'

export const protect = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token not found'
            })
        }

        const decoded = verifyToken(token)
        
        const user = await User.findById(decoded.id).select('-password')

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            })
        }

        req.user = user

        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Invalid token'
        })
    }
}
