// Ext modules
import { Express, Request, Response } from "express"

// Int modules
import { validateResource } from "./middlewares/validateResource"
import { requireUser } from "./middlewares/requireUser"

import { createUserHandler } from "./controllers/user.controller"
import {
    createUserSessionHandler,
    refreshUserSessionHandler,
    deleteSessionHandler,
    getUserSessionsHandler,
    deleteAllSessionsHandler
} from "./controllers/session.controller"

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

    // Following routes require authorization
    app.use(requireUser)

    // Refresh session
    // Probably this aproach isnt the best one
    // FIX
    app.get(
        "/api/refresh",
        refreshUserSessionHandler
    )

    // Active sessions
    app.get(
        "/api/sessions",
        getUserSessionsHandler
    )

    // Logout
    app.delete(
        "/api/sessions",
        deleteSessionHandler
    )

    // Delete all sessions
    app.delete(
        "/api/sessions/all",
        deleteAllSessionsHandler
    )
}

export { routes }
