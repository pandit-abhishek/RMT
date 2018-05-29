import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { StorageService } from './../_services';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    public isUserLoggedIn: boolean = false;
    constructor(
        private storageService: StorageService
    ) { }

    ngOnInit() {
        if (parseInt(this.storageService.isLoggedIn())) {
            this.isUserLoggedIn = true;
        }
    }

}
