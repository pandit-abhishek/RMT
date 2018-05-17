import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { } from 'rxjs/Rx';

import { ResponseObject } from './../_models/response.object'

@Injectable()
export class BaseServices {
    constructor(protected http: HttpClient){ }

    protected handleMap(response : Response){
        return new ResponseObject(response);
    }

    protected handleError(error: Response){
        return Observable.throw(error.statusText);
    }
}