export default class AuthMiddleware {
    public readonly verifier: any;
    public readonly secret: String;
    constructor(verifier: any, secret: String) {
        this.secret = secret;
        this.verifier = verifier;
    }
    authenticate = (req: any, res: any, next: any) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)
        this.verifier(token, this.secret, (err: string, user: any) => {
            console.log(err)
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    }
}
