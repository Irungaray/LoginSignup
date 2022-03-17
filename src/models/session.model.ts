// Ext modules
import mongoose from 'mongoose'

// Int modules
import { UserDocument } from './user.model'

interface SessionDocument extends mongoose.Document {
    user: UserDocument['_id'],
    valid: boolean,
    userAgent: string,
    createdAt: Date,
    updatedAt: Date,
}

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    valid: {
        type: Boolean, default: true
    },
    userAgent: {
        type: String
    }
}, {
    timestamps: true
})

const SessionModel = mongoose.model('Session', sessionSchema)

export { SessionDocument, SessionModel }
