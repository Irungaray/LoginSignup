// Ext modules
import { FilterQuery, UpdateQuery } from "mongoose"
import config from 'config'

// Int modules
import { SessionDocument, SessionModel } from "../models/session.model"
import { findUser } from "./user.service"

import { verifyJwt, signJwt } from "../utils/jwt"

let accessTokenTtl:string = config.get('accessTokenTtl')

const createSession = async (
    userId: string,
    userAgent: string
) => {
    const session = await SessionModel.create({
        user: userId,
        userAgent
    })

    return session.toJSON()
}

const findSessions = async (
    query: FilterQuery<SessionDocument>
) => {
    return SessionModel.find(query).lean()
}

const updateSession = async (
    query: FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>
) => {
    return SessionModel.updateOne(query, update)
}

const reIssueAccessToken = async (
    refreshToken: string
) => {
    // Dirty fix to get _id without lodash's .get method
    const { decoded }:any = verifyJwt(refreshToken)
    if (!decoded || !decoded._id) return false

    console.log("Decodeado:", decoded)
    console.log("reissuing access token")

    const session = await SessionModel.findById(decoded.session)
    if (!session || !session.valid) return false

    const user = await findUser({ _id: session.user })
    if (!user) return false

    const accessToken = signJwt(
        {
            ...user,
            session: session._id
        },
        {
            expiresIn: accessTokenTtl // 15 minutes
        }
    )

    return accessToken
}

export {
    createSession,
    findSessions,
    updateSession,
    reIssueAccessToken
}
