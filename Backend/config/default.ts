let {
    dbUser,
    dbPassword,
    dbName,
    dbClUri,
    publicKey,
    privateKey,
    accessTokenTtl,
    refreshTokenTtl,
} = process.env

export default {
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@${dbClUri}/${dbName}?retryWrites=true&w=majority`,
    saltRounds: 10,
    publicKey,
    privateKey,
    accessTokenTtl,
    refreshTokenTtl
}
