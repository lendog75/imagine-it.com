import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LinkService {

    private baseurl = 'http://api.linkpreview.net/?key=5beb0cf878f1699efe6e00320edb6fac7ab90e845bb3e&q=';

    constructor (private http: HttpClient) { }

    getDetails (linkUrl: string) {
        const url = `${this.baseurl}${linkUrl}`;
        return this.http.get<any>(url);
    }
}
