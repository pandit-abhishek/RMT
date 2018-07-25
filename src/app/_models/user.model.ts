export interface IUser {
    id: any;
    userName: any;
    firstName: string;
    lastName: string;
    userCategory: string;
    userRole:string;
    applicationAccess:any;
    userManager:string;
    userStatus:any;
    enabled:any;
}

export class UserModel implements IUser {
    id: any;
    userName: any;
    firstName: string;
    lastName: string;
    userCategory: string;
    userRole:string;
    applicationAccess:any;
    userManager:string;
    userStatus:any;
    enabled:any;

    constructor(user: IUser){
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.userName = user.userName;
        this.userCategory = user.userCategory;
        this.userRole = user.userRole;
        this.applicationAccess = user.applicationAccess;
        this.userManager = user.userManager;
        this.userStatus = user.userStatus;
        this.enabled = user.enabled;
    }

}