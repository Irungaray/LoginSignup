// Ext modules
import { Request, Response, NextFunction } from 'express'
import { reIssueAccessToken } from '../services/session.service'

// Int modules
import { verifyJwt } from '../utils/jwt'
import { logger } from '../utils/logger'
import config from 'config'

let clientDomain:string = config.get('clientDomain')
let secureCookie:boolean = config.get('secureCookie')
let cookieAccessTokenTtl:number = config.get('accessTokenTtl')

const deserializeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const accessToken = req.cookies?.accessToken || req.headers.authorization?.replace(/^Bearer\s/, "") || ""
    const refreshToken = req.cookies?.refreshToken || req.headers.xrefresh || ""

    if (!accessToken) {
        logger.warn(`Unauthorized request from ${req.headers['user-agent']}`)
        return next()
    }

    const { decoded, expired } = verifyJwt(accessToken)

    if (decoded) {
        res.locals.user = decoded

        logger.warn(`Succesful decodification of ${res.locals.user.name}.`)

        return next()
    }

    if (expired && refreshToken) {
        // logger.warn(`Proceeding to refresh ${res.locals.user.name}'s token.`)

        const newAccessToken = await reIssueAccessToken(refreshToken as string)

        if (newAccessToken) {
            res.setHeader('x-access-token', newAccessToken)

            res.cookie("accessToken", newAccessToken, {
                maxAge: cookieAccessTokenTtl, // 15 minutes
                domain: clientDomain,
                path: "/",
                sameSite: "strict",
                // On prod, change .env to true
                httpOnly: secureCookie,
                secure: secureCookie
            })
        }

        const result = verifyJwt(newAccessToken as string)

        res.locals.user = result.decoded

        return next()
    }

    return next()
}

export { deserializeUser }
