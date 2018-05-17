import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor(){

    }

    public setLoginUserDetails(data: any){
        localStorage.setItem('isLoggedIn','1');
        localStorage.setItem('userRole',data.userRole);
    }

    public isLoggedIn(){
        return localStorage.getItem('isLoggedIn');
    }

    public getUserRole(){
        return localStorage.getItem('userRole');
    }

    public clearAll(){
        localStorage.clear();
    }
}