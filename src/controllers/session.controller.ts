// Ext modules
import { Request, Response } from "express"

// Int modules
import { validatePassword } from "../services/user.service"
import { createSession, findSessions } from "../services/session.service"

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
    const userId = res.locals.user._id

    const sessions = await findSessions({
        user: userId,
        valid: true
    })

    logger.warn("Retrieving sessions.")

    return res.send(sessions)
}

export { createUserSessionHandler, getUserSessionsHandler }
