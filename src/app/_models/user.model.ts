export interface IUser {
    id: any;
    firstName: string;
    lastName: string;
    username: any;
    password:any;
    email: any;
    status: boolean;
    createdAt?: Date;
}

export class UserModel implements IUser {
    id: any;
    firstName: string;
    lastName: string;
    username: any;
    password:any;
    email: any;
    status: boolean;

    constructor(user: IUser){
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
        this.status = user.status;
    }

}