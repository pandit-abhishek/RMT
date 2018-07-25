import { Component, OnInit,ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { StorageService } from './../_services';
import { SidebarComponent } from './../_partials/sidebar/sidebar.component';




@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
    public isUserLoggedIn: boolean = false;

    @ViewChild('dashboard') dashboard: ElementRef;

    constructor(
        private storageService: StorageService,
        private sidebarComponent: SidebarComponent
    ) { }

    ngOnInit() {
        if (parseInt(this.storageService.isLoggedIn())) {
            this.isUserLoggedIn = true;
        }
    }

    ngAfterViewInit() {
        // this.sidebarComponent.sidebarHeight =  this.dashboard.nativeElement.offsetHeight;
        // console.log(this.dashboard.nativeElement.offsetHeight);
    }

}
