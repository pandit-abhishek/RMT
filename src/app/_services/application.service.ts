import { Injectable }  from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';

import 'rxjs/Rx';
import { Response } from '@angular/http';

import { ApplicationModel } from './../_models/application.model';
import { BaseServices } from './base.services';
import { environment } from './../../environments/environment';
import { httpOptions } from './../config/curl';

@Injectable()
export class ApplicationService extends BaseServices implements OnInit {

    private host = environment.API_HOST;
    private httpOptions = httpOptions;

    constructor(protected http: HttpClient){
        super(http);
    }

    ngOnInit() {
        
    }

    public addApplication(data) {
        console.log(data);
        let path = '/user/login';
        // return this.http.post(this.host + path, data, this.httpOptions)
        //                 .map(this.handleMap)
        //                 .catch(this.handleError);
    }

}