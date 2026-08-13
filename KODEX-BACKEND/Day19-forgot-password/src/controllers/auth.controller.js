import User from '../models/user.model.js'
import { forgotPassword_handler, loginUser, registerUser } from '../services/auth.service.js'
import { verify_RawToken } from '../utils/token.util.js'

export const register = async (req, res) => {
    try {
        const data = await registerUser(req.body)

        res.cookie('jwt', data.token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        })

    return  res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data
        })

    } catch (error) {
    return res.status( error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const data = await loginUser(req.body)

        res.cookie('jwt', data.token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        })

        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }
}

export const forgotPassword = async (req, res) => {
    try {
    const response = await forgotPassword_handler(req.body)

        return res.status(200).json({
            success: true,
            message: 'Password reset link sent successfully to your email',
        })
        
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }


}

export const ResetPassword = async (req, res) => {
    try {
        const token = req.params.token

        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'Token not found'
            })
        }

        const decode = verify_RawToken(token)

        const existedUser = await User.findById(decode.id)

        if (!existedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        res.render("update.ejs",{userid:decode.id})
        
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }
}

export const UpdatePassword = async (req, res) => {
    try {
        const userid = req.params.params
        const  password  = req.body.confirmPassword

        if (!password) {
            return res.status(400).json({
                success: false,
                message: 'Password is required'
            })
        }
        const updatedUser = await User.findByIdAndUpdate(userid, { password }, { new: true })

        return res.status(200).json({
            success: true,
            message: 'Password updated successfully',
            updatedUser
        })
    }
    catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }
}