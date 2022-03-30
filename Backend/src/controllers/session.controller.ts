// Ext modules
import { Request, Response, CookieOptions } from "express"

// Int modules
import { validatePassword } from "../services/user.service"
import { createSession, deleteSessions, findSessions, updateSession } from "../services/session.service"

import { signJwt } from "../utils/jwt"
import { logger } from "../utils/logger"
import config from 'config'

let accessTokenTtl:string = config.get('accessTokenTtl')
let refreshTokenTtl:string = config.get('refreshTokenTtl')
let clientDomain:string = config.get('clientDomain')
let secureCookie:boolean = config.get('secureCookie')
let cookieAccessTokenTtl:number = config.get('cookieAccessTokenTtl')
let cookieRefreshTokenTtl:number = config.get('cookieRefreshTokenTtl')

const accessTokenCookieOptions:CookieOptions = {
    maxAge: cookieAccessTokenTtl, // 15 minutes
    domain: clientDomain,
    path: "/",
    sameSite: "strict",
    // On prod, change .env to true
    httpOnly: secureCookie,
    secure: secureCookie
}

const refreshTokenCookieOptions:CookieOptions = {
    ...accessTokenCookieOptions,
    maxAge: cookieRefreshTokenTtl // 1 year
}

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
    res.cookie("accessToken", accessToken, accessTokenCookieOptions)

    res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions)

    return res.send({
        message: "Succesfully logged. Here are your tokens.",
        accessToken,
        refreshToken
    })
}

const refreshUserSessionHandler = async (
    req: Request,
    res: Response
) => {
    const { name } = res.locals.user

    logger.warn(`Refreshing session for ${name}`)

    return res.send("Session refreshed")
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

const deleteAllSessionsHandler = async (
    req: Request,
    res: Response
) => {
    const sessions = await deleteSessions({
        valid: true
    })

    logger.warn("Deleting all active sessions.")

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
    refreshUserSessionHandler,
    getUserSessionsHandler,
    deleteSessionHandler,
    deleteAllSessionsHandler
}
