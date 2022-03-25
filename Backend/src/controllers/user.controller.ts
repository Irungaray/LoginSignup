// Ext modules
import { Request, Response } from "express"

// Int modules
import { CreateUserInput } from "../schemas/user.schema"
import { createUser } from "../services/user.service"
import { logger } from "../utils/logger"

const createUserHandler = async (
    req: Request<{}, {}, CreateUserInput['body']>,
    res: Response
) => {
    try {
        const user = await createUser(req.body)

        logger.warn(`Created user "${user.name}"`)

        return res.send(user)
    } catch (err: any) {
        logger.error(err)
        return res.status(409).send(err.message)
    }
}

export { createUserHandler }
