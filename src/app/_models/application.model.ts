export interface IApplication {
    applicationName: any;
    shortDesc: string;
    longDesc: string;
    applicationShortName: any;
    currentVersion:any;
    primaryManager: any;
    secondaryManager: any;
    backupApprover: any;
    coeLead: string;
    itDevDirector: string;
    itSupportDirector: string;
    bussinessUser: string;
    distributionList: string;
}

export class ApplicationModel implements IApplication {

    applicationName: any;
    shortDesc: string;
    longDesc: string;
    applicationShortName: any;
    currentVersion:any;
    primaryManager: any;
    secondaryManager: any;
    backupApprover: any;
    coeLead: string;
    itDevDirector: string;
    itSupportDirector: string;
    bussinessUser: string;
    distributionList: string;

    constructor(application: IApplication){
        this.applicationName = application.applicationName;
        this.shortDesc = application.shortDesc;
        this.longDesc = application.longDesc;
        this.applicationShortName = application.applicationShortName;
        this.currentVersion = application.currentVersion;
        this.primaryManager = application.primaryManager;
        this.secondaryManager = application.secondaryManager;
        this.backupApprover = application.backupApprover;
        this.coeLead = application.coeLead;
        this.itDevDirector = application.itDevDirector;
        this.itSupportDirector = application.itSupportDirector;
        this.bussinessUser = application.bussinessUser;
        this.distributionList = application.distributionList;
    }

}