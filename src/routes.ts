// Ext modules
import { Express, Request, Response } from "express"

// Int modules
import { validateResource } from "./middlewares/validateResource"
import { requireUser } from "./middlewares/requireUser"

import { createUserHandler } from "./controllers/user.controller"
import { createUserSessionHandler, getUserSessionsHandler } from "./controllers/session.controller"

import { createUserSchema } from "./schemas/user.schema"
import { createSessionSchema } from "./schemas/session.schema"

const routes = (app: Express) => {
    // Healthcheck
    app.get("/", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    // Signup
    app.post(
        "/api/users",
        validateResource(createUserSchema),
        createUserHandler
    )

    // Login
    app.post(
        "/api/sessions",
        validateResource(createSessionSchema),
        createUserSessionHandler
    )

    // Active sessions
    app.get(
        "/api/sessions",
        requireUser,
        getUserSessionsHandler
    )
}

export { routes }
