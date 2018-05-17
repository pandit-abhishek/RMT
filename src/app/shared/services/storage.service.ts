import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor(){

    }

    public setLogin(){
        localStorage.setItem('isLoggedIn','1');
    }

    public isLoggedIn(){
        return localStorage.getItem('isLoggedIn');
    }

    public clearAll(){
        localStorage.clear();
    }
}