import { Request, Response, NextFunction } from 'express'
// import { logger } from '../utils/logger'

const requireUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = res.locals.user

    // FIX: Send proper message
    if (!user) return res.status(403).send("Forbidden.")

    // logger.info("User:", user.name)

    return next()
}

export { requireUser }
