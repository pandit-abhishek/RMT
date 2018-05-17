import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from './../_models/user.model';
import { BaseServices } from './base.services';
import { environment } from './../../environments/environment';

@Injectable()
export class UserServices extends BaseServices {

    private host = environment.API_HOST;
    
    constructor(protected http: HttpClient){
        super(http);
    }

    public getUserById(id){
        let path = 'user'
        return this.http.get(this.host + path + '/' + id)
                        .map(this.handleMap)
                        .catch(this.handleError)
    }

    public getUserByUserName(username, pass){
        if(username == 'admin' && pass == 'admin'){
            return {
                'userRole': 'admin'
            };
        }else if(username == 'developer' && pass == 'developer'){
            return {
                'userRole': 'developer'
            };
        }else if(username == 'business' && pass == 'business'){
            return {
                'userRole': 'business'
            };
        }else {
            return false;
        }
    }
}