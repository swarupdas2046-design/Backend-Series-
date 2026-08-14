import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [3, 'Name must be at least 3 characters']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters'],
            select: false
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', function hashPassword() {
    if (!this.isModified('password')) {
        return 
    }

    this.password = bcrypt.hashSync(this.password, 10)
})

userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User
