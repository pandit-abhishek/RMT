import { Component, OnInit } from '@angular/core';

import { StorageService } from './../../_services';
import { Router } from '@angular/router';

import { MenuItem } from './../../config/menu.item'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    public menus;

    constructor(
        private router: Router,
        private storageService: StorageService,
        private menuItems: MenuItem
    ) { }

    ngOnInit() {
        var userRole = this.storageService.getUserRole();
        this.menus = this.menuItems.menus[userRole];
    }

    public onLogOut(){
        this.storageService.clearAll();
        this.router.navigateByUrl('/login');
    }

}
