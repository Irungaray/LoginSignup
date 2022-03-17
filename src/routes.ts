// Ext modules
import { Express, Request, Response } from "express"

// Int modules
import { validateResource } from "./middlewares/validateResource"

import { createUserHandler } from "./controllers/user.controller"
import { createUserSessionHandler } from "./controllers/session.controller"

import { createUserSchema } from "./schemas/user.schema"
import { createSessionSchema } from "./schemas/session.schema"

const routes = (app: Express) => {
    app.get("/", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post(
        "/api/users",
        validateResource(createUserSchema),
        createUserHandler
    )

    app.post(
        "/api/sessions",
        validateResource(createSessionSchema),
        createUserSessionHandler
    )
}

export { routes }
