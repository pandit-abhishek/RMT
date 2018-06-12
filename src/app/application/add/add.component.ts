import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ApplicationService } from './../../_services/application.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    constructor(
        private applicationService: ApplicationService
    ) { }

    public newApplicationForm: FormGroup;
    
    ngOnInit() {
        this.createFormApllication();
    }

    createFormApllication(): void {
        this.newApplicationForm = new FormGroup({
            applicationName : new FormControl(),
            shortDesc : new FormControl(),
            longDesc : new FormControl(),
            applicationShortName : new FormControl(),
            currentVersion : new FormControl(),
            primaryManager : new FormControl(),
            secondaryManager : new FormControl(),
            backupApprover : new FormControl(),
            coeLead : new FormControl(),
            itDevDirector : new FormControl(),
            itSupportDirector : new FormControl(),
            bussinessUser : new FormControl(),
            distributionList : new FormControl(),

        });
    }

    public addApplication(event): void {
        this.applicationService.addApplication(this.newApplicationForm.value);
    }

}
