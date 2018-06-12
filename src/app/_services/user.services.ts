import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Response } from '@angular/http';

import { UserModel } from './../_models/user.model';
import { BaseServices } from './base.services';
import { environment } from './../../environments/environment';
import { httpOptions } from './../config/curl';

@Injectable()
export class UserServices extends BaseServices implements OnInit{

    private host = environment.API_HOST;
    private httpOptions = httpOptions;

    constructor(protected http: HttpClient){
        super(http);
    }

    ngOnInit() {
        
    }

    public getUserById(id){
        let path = 'user';
        return this.http.get(this.host + path + '/' + id ,this.httpOptions)
                        .map(this.handleMap)
                        .catch(this.handleError)
    }

    public getAllUser(){
        let path = '/user';
        return this.http.get(this.host + path, this.httpOptions)
                        .map(this.handleMap)
                        .catch(this.handleError);
    }

    public login(username){

        let body = {
            'username': username
        };

        let path = '/user/login';
        return this.http.post(this.host + path, body, this.httpOptions)
                        .map(this.handleMap)
                        .catch(this.handleError);
    }
    
    
}