import { Component, OnInit } from '@angular/core';

// import { InstanceService } from './../../_services/instance.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    // public newInstanceForm: FormGroup

    constructor(
        // private instanceService: InstanceService
    ) { }

    public newInstanceForm: FormGroup;

    ngOnInit() {
        this.createInstanceForm();
    }

    public createInstanceForm(): void {
        this.newInstanceForm = new FormGroup({
            appShortName: new FormControl(),
            instanceName: new FormControl(),
            instanceType: new FormControl(),
            instanceUrl: new FormControl(),
            instanceVersion: new FormControl(),
            description: new FormControl(),
            displayType: new FormControl(),
            enableFlag: new FormControl()
        });
    }

    

    public addInstance(event): void {
        // this.instanceService.addInstance(this.newInstanceForm.value);
    }
}
