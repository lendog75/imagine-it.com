import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../shared/animations';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
    animations: [pageTransition]
})
export class ContactUsComponent implements OnInit {

    constructor () { }

    ngOnInit () {
    }

}
