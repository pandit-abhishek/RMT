import { Component, OnInit } from '@angular/core';

import { StorageService } from './../shared';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private storageService: StorageService
    ) { }

    ngOnInit() {
      
    }
  
    public loginUser(e){
        e.preventDefault();
        
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        // console.log(username, password);
        if(username == 'admin' && password == 'admin'){
            this.storageService.setLogin();
            // this.isLoggedIn = true
            // console.log('here');
            // console.log(this.isLoggedIn);
            // redirectTo:'dashboard';
            this.router.navigateByUrl('/dashboard');
            
        }else {
            console.log('else');
        }
        // return false;
    }

    

}
