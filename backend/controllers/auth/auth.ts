import User from '../../entities/user'
export default class AuthConroller {
    public readonly repository: any;
    public readonly validator: any;
    public readonly hash: any;
    public readonly compare: any;
    public readonly generateToken: any;
    constructor(
        repository: any,
        validator: any,
        hash: any,
        compare: any,
        generateToken: any
    ) {
        this.repository = repository;
        this.validator = validator;
        this.hash = hash;
        this.compare = compare;
        this.generateToken = generateToken;
    }
    login = async (req: any, res: any) => {
        try {
            const { username, password } = req.body
            const user = await this.repository.findOne({ username })
            if (!user) {
                return res.status(400).json({ message: `User ${username} not found` })
            }
            const isValidPassword = this.compare(password, user.password)
            if (!isValidPassword) {
                return res.status(400).json({ message: `Wrong password` })
            }
            const token = this.generateToken(user.username)
            res.json({ token: token })
        }
        catch (e) {
            return res.status(400).json({ message: `Not found` })
        }
    }
    register = async (req: any, res: any) => {
        const errors = this.validator(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors)
        }
        const username =  req.body.username;
        const userFound = await this.repository.findOne({username});
        if (userFound) {
            return res.status(400).json({ message: `User is already registered` })
        }
        const password = this.hash(req.body.password)
        const user = new User(req.body.username, password)
        try {
            await this.repository.create(user)
            res.json({ status: "Ok" })
        } catch (e) {
            // TODO better error handling
            res.json(e)
        }
    }
}
