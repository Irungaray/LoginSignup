let { dbUser, dbPassword, dbName, dbClUri } = process.env

export default {
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@${dbClUri}/${dbName}?retryWrites=true&w=majority`
}