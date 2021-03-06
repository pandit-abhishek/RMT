import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

import { StorageService } from './../../_services';
import { Router } from '@angular/router';

import { MenuItem } from './../../config/menu.item'
import { hash } from './../../config/constant';

import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

    public menus;

    private hash = hash.symbol;
    
    public sidebarClass = 'sidebar';

    @Input()
    sidebarHeight: number;

    constructor(
        private router: Router,
        private storageService: StorageService,
        private menuItems: MenuItem,
    ) {
        
    }

    getSideBarHeight(){
        // console.log(this.sidebarHeight);
        // return this.sidebarHeight;
        
    }

    ngOnInit() {
        var userRole = this.storageService.getUserRole();
        this.menus = this.menuItems.menus[userRole];
    }

    public onLogOut(){
        this.storageService.clearAll();
        this.router.navigate(['/login']);
    }

    public openChildrenMenu(event) {
        let target = event.currentTarget;
        let id = target.attributes.id;
        $(this.hash+id.nodeValue).find(this.hash+'child-menu-'+id.nodeValue).slideToggle();
    }

    public hideSideBar(event){
        this.sidebarClass = 'sidebar-collapse';
        $(".main-container").css('margin-left',0);
    }

}
