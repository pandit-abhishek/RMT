import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public appName :string;
    constructor(private _activateRoute: ActivatedRoute) {
        
    }

    ngOnInit() {
        this.appName = this._activateRoute.snapshot.params['app'];
        alert(this.appName);
    }

}
