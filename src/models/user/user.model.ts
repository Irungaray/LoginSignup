// Ext modules
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

// Int modules
import { logger } from '../../utils/logger'

interface UserDocument extends mongoose.Document {
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(candidatePassword: string): Promise<Boolean>
}

const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true
    },
    name: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function (next) {
    let user = this as UserDocument
    let saltRounds:number = config.get('saltRounds')

    if (!user.isModified) return next()

    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hashSync(user.password, salt)

    user.password = hash

    return next()
})

userSchema.methods.comparePassword = async function (candidatePassword: string):Promise<boolean> {
    let user = this as UserDocument

    return bcrypt.compare(candidatePassword, user.password)
        .catch((err:any) => {
            logger.error("Passwords don't match")
            return false;
        })
}

// console.log(userSchema);

const UserModel = mongoose.model('User', userSchema)

export { UserDocument, UserModel }
