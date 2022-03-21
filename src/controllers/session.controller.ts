// Ext modules
import { Request, Response } from "express"

// Int modules
import { validatePassword } from "../services/user.service"
import { createSession, findSessions, updateSession } from "../services/session.service"

import { signJwt } from "../utils/jwt"
import { logger } from "../utils/logger"
import config from 'config'

let accessTokenTtl:string = config.get('accessTokenTtl')
let refreshTokenTtl:string = config.get('refreshTokenTtl')

const createUserSessionHandler = async (
    req: Request,
    res: Response
) => {
    // Validate user's password
    const user = await validatePassword(req.body)
    if (!user) return res.status(401).send("Invalid email or password.")

    // Create session
    const session = await createSession(user._id, req.get("user-agent") || "")

    // Create access token
    const accessToken = signJwt(
        {
            ...user,
            session: session._id
        },
        {
            expiresIn: accessTokenTtl // 15 minutes
        }
    )

    // Create refresh token
    const refreshToken = signJwt(
        {
            ...user,
            session: session._id
        },
        {
            expiresIn: refreshTokenTtl // 1 year
        }
    )

    logger.info(`User ${user.name} loggin in.`)

    // Return access & refresh tokens
    return res.send({
        message: "Succesfully logged. Here are your tokens.",
        accessToken,
        refreshToken
    })
}

const getUserSessionsHandler = async (
    req: Request,
    res: Response
) => {
    const {_id, name } = res.locals.user

    const sessions = await findSessions({
        user: _id,
        valid: true
    })

    logger.warn(`Retrieving sessions for ${name}`)

    return res.send(sessions)
}

const deleteSessionHandler = async (
    req: Request,
    res: Response
) => {
    const { sessionId, name } = res.locals.user

    await updateSession(
        { _id: sessionId },
        { valid: false }
    )

    logger.info(`User ${name} loggin out.`)

    return res.send({
        accessToken: null,
        refreshToken: null
    })
}

export {
    createUserSessionHandler,
    getUserSessionsHandler,
    deleteSessionHandler
}
