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
        let users = [];
        var userData = this.userServices.login(username).subscribe(
                (res) => {
                    
                    if (res.data) {
                        this.storageService.setLoginUserDetails(res.data);
                        this.router.navigateByUrl('/dashboard');
                } else {
                    // TODO: NO user's in the database so show the flash messages in the page.
                }
            },
            (error: any) => {
                console.log('this is error from user component getAllUsers call', error);
            }
        );
    }

    

}
