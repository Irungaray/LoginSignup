// Ext modules
import mongoose from 'mongoose'

// Int modules
import { UserDocument } from './user.model'

interface SessionDocument extends mongoose.Document {
    user: UserDocument['_id'],
    name: string,
    valid: boolean,
    userAgent: string,
    createdAt: Date,
    updatedAt: Date,
}

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    name: {
        type: mongoose.Schema.Types.String, ref: 'UserName'
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

const SessionModel = mongoose.model<SessionDocument>('Session', sessionSchema)

export { SessionDocument, SessionModel }
