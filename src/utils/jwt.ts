// Ext modules
import jwt from 'jsonwebtoken'

// Int modules
import config from 'config'
import { logger } from './logger'

let publicKey:string = config.get('publicKey')
let privateKey:string = config.get('privateKey')

const signJwt = (
    object: Object,
    options?: jwt.SignOptions | undefined
) => {
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: 'RS256'
    })
}

const verifyJwt = (token: string) => {
    try {
        const decoded = jwt.verify(token, publicKey)

        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (err:any) {
        logger.error(err)
        return {
            valid: false,
            expired: err.message === 'jwt expired',
            decoded: null
        }
    }
}

export { signJwt, verifyJwt }
