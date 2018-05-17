import { Component, OnInit } from '@angular/core';

import { StorageService } from './../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(
        private router: Router,
        private storageService: StorageService
    ) { }

    ngOnInit() {
    }

    public onLogOut(){
        this.storageService.clearAll();
        this.router.navigateByUrl('/login');
    }

}
