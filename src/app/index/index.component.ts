import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { StorageService } from './../shared';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    constructor(
        private router: Router,
        private storageService: StorageService 
    ) {  }

    ngOnInit() {
        // if(this.storageService.isLoggedIn()){
        //     this.router.navigateByUrl('/dashboard');
        // }else {
        //     this.router.navigateByUrl('/login');
        // }
    }
    
    

}
