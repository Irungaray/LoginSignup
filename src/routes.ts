// Ext modules
import { Express, Request, Response } from 'express'

// Int modules
import { validateResource } from './middlewares/validateResource'
import { createUserHandler } from './controllers/user.controller'
import { createUserSchema } from './schemas/user.schema'

const routes = (app:Express) => {

    app.get('/',  (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post('/api/users', validateResource(createUserSchema), createUserHandler)

}

export { routes }