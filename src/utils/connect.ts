// Ext modules
import mongoose from 'mongoose'
import config from 'config'

// Int modules
import { logger } from './logger'

const connect = () => {
    const dbUri:string = config.get('dbUri')

    return mongoose.connect(dbUri)
        .then(() => logger.info('Connected to DB'))
        .catch((err:any) => {
            logger.error('Could not connect to DB')
            process.exit(1)
        })
}

export { connect }