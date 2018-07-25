import { Component, OnInit } from '@angular/core';
import { UserServices } from './../../_services/user.services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    constructor(
        private userService :  UserServices
    ) { }

    public newUserForm: FormGroup;

    ngOnInit() {
        this.createUserForm();
    }

    public createUserForm(): void {
        this.newUserForm = new FormGroup({
            userName: new FormControl(),
            firstName: new FormControl(),
            lastName: new FormControl(),
            userCategory: new FormControl(),
            userRole: new FormControl(),
            applicationAccess: new FormControl(),
            userManager: new FormControl(),
            userStatus: new FormControl(),
            enabled: new FormControl()
        });
    }

    public addUser(event): void {
        this.userService.addNewUser(this.newUserForm.value);
    }

}
