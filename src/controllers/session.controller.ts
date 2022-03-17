// Ext modules
import { Request, Response } from "express"

// Int modules
import { validatePassword } from "../services/user.service"
import { createSession } from "../services/session.service"

import { signJwt } from "../utils/jwt"
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
            expiresIn: refreshTokenTtl // 15 minutes
        }
    )

    // Return access & refresh tokens
    return res.send({
        accessToken, refreshToken
    })
}

export { createUserSessionHandler }
