import { Component, OnInit, ViewChild, ComponentFactoryResolver,ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    public content :string ;
    public url :string ;
    public appName :string;
    constructor(private _activateRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.appName = this._activateRoute.snapshot.params['app'];
        console.log(this.appName);
        this.content = 'hello';
        this.url = "www.google.com";
    }

    public getDeatils(event: MatTabChangeEvent){
        this.content = 'hello';
        this.url = "www.google.com";

    }
}
