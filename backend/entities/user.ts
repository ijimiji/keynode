export default class User {
    public username: string;
    public password: string;
    public cpm: number = 0;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}
