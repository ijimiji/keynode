import User from '../../entities/user';

export default class UserController {
    public readonly repository: any;
    constructor(repository: any) {
        this.repository = repository;
    }

    updateCPM = async (req: any, res: any) => {
        const username = req.body.username;
        const cpm = req.body.cpm;
        if (req.user.username == username) {
            const user = await this.repository.findOne({username})
            const newCpm: number = (parseInt(cpm) + parseInt(user.cpm)) / 2;
            try {
                await this.repository.update({ username: username }, { cpm: newCpm })
                res.send({status: "Ok"})
            } catch (e){
                res.send({status: "Error"})
            }
        }
    }
    update = async (req: any, res: any) => {
        const username = req.body.username;
        res.send(await this.repository.update({ username: username }, { username: "FOOO" }));
    }
    getAll = async (req: any, res: any) => {
        res.send(await this.repository.getAll());
    }
    post = async (req: any, res: any) => {
        const user = new User("Jahor", "foo");
        res.send(await this.repository.create(user));
    }
}