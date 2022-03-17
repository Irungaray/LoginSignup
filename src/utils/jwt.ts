import jwt from 'jsonwebtoken'

import config from 'config'

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
            expired: true,
            decoded
        }
    } catch (err:any) {
        return {
            valid: false,
            expired: err.message === 'jwt expired',
            decoded: null
        }
    }
}

export { signJwt, verifyJwt }
