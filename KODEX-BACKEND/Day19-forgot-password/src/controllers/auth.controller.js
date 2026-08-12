import { forgotPassword_handler, loginUser, registerUser } from '../services/auth.service.js'

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
            message: 'Password reset link sent successfully',
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

        res.render("update.ejs")
        
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }
}