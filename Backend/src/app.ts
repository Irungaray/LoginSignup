// dotenv
require('dotenv').config()
let { PORT, clientUri } = process.env

// Ext modules
import express from 'express'
import cors  from 'cors'
import cookieParser  from 'cookie-parser'

// Int modules
import { deserializeUser } from './middlewares/deserializeUser'

import { connect } from './utils/connect'
import { logger } from './utils/logger'
import { routes } from './routes'

logger.warn("BACKEND")

const app = express()

app.use(express.json())
app.use(
    cors({
        credentials: true,
        origin: clientUri
    })
)
app.use(cookieParser())

app.use(deserializeUser)

app.listen(PORT, async () => {
    await connect()

    logger.info(`Running on http://localhost:${PORT}`)

    routes(app)
})
