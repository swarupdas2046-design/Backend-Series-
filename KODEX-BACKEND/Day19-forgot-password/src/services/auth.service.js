import User from '../models/user.model.js'
import { GENERATE_RAW_TOKEN, generateToken } from '../utils/token.util.js'

const sanitizeUser = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
})

export const registerUser = async ({ name, email, password }) => {
    if (!name || !email || !password) {
        const error = new Error('Name, email and password are required')
        error.statusCode = 400
        throw error
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        const error = new Error('User already exists with this email')
        error.statusCode = 409
        throw error
    }

    const user = await User.create({ name, email, password })
    const token = generateToken(user._id)

    return {
        user: sanitizeUser(user),
        token
    }
}

export const loginUser = async ({ email, password }) => {
    if (!email || !password) {
        const error = new Error('Email and password are required')
        error.statusCode = 400
        throw error
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user || !(await user.comparePassword(password))) {
        const error = new Error('Invalid email or password')
        error.statusCode = 401
        throw error
    }

    const token = generateToken(user._id)

    return {
        user: sanitizeUser(user),
        token
    }
}


export const forgotPassword_handler = async ({ email }) => {
    if (!email) {
        const error = new Error('Email is required')
        error.statusCode = 400
        throw error
    }

    const user = await User.findOne({ email })

    if (!user) {
        const error = new Error('User not found')
        error.statusCode = 404
        throw error
    }

    const RawToken = GENERATE_RAW_TOKEN(user._id)
    const ResetPasswordLink = `http://localhost:3000/api/auth/reset-password/${RawToken}`


}