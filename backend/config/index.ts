const dbConfig = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
const secret = process.env.SECRET || "TEST_SECRET_KEY"
const dbConnectionString = process.env.DB_STRING || "mongodb://localhost:27017/usersdb"
const port = process.env.PORT || 3000

export {
    secret,
    dbConnectionString,
    dbConfig,
    port
}