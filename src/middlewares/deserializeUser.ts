// Ext modules
import { Request, Response, NextFunction } from 'express'

// Int modules
import { verifyJwt } from '../utils/jwt'
import { logger } from '../utils/logger'

const deserializeUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const accessToken = req.headers.authorization?.replace(/^Bearer\s/, "") || ""
    logger.info("Has access token.")

    if (!accessToken) {
        logger.info("No token, proceeding to next.")
        return next()
    }

    const { decoded, expired } = verifyJwt(accessToken)

    if (decoded) {
        res.locals.user = decoded

        logger.warn("Succesful decodification.")

        return next()
    }

    return next()
}

export { deserializeUser }
