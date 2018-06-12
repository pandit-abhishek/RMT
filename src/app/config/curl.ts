import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Type':  'application/json'
    })
}