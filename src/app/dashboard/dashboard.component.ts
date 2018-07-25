import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { trigger, state, style,transition,animate,keyframes } from '@angular/animation';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
    test : string = 'Hello';
    // public prod = [
    //     {
    //         'name':'ES',
    //         'env':'prod'
    //     }
    // ];

    public data = 'Test Modal';
    constructor(
        private _router: Router,
    ) { }

    ngOnInit() {
        
    }

    public appEnvDetails(event,item) {
        console.log(item);
    }
    
    public applicationDetails(){
        console.log('here');
        alert('here');
    }
}
