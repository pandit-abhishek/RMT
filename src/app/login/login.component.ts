import { Component, OnInit } from '@angular/core';

import { StorageService } from './../_services';
import { Router } from '@angular/router';

import { UserServices } from './../_services'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private storageService: StorageService,
        private userServices: UserServices
    ) { }

    ngOnInit() {
      
    }
  
    public loginUser(e){
        e.preventDefault();
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        var userData = this.userServices.getUserByUserName(username,password);

        if(userData){
            this.storageService.setLoginUserDetails(userData);
            this.router.navigateByUrl('/dashboard');
            
        }else {
            console.log('else');
        }
    }

    

}
