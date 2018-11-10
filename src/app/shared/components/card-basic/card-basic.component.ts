import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-basic',
    templateUrl: './card-basic.component.html',
    styleUrls: ['./card-basic.component.scss']
})
export class CardBasicComponent implements OnInit {
    @Input() image: string = '';

    constructor () { }

    ngOnInit () {
    }

    get backgroundImageUrl() {
        if (this.image) {
            return `url("${this.image}")`;
        }

        return null
    }

}
