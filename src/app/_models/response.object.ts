export class ResponseObject {
    data?: any;
    message?: string;
    status: string;
    success: boolean;

    constructor(res: any) {
        this.data = res.data;
        this.message = res.message;
        this.status = res.status;
        this.success = res.success;
    }
}