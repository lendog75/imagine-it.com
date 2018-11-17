import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { LinkService } from '../../../core/services/link.service';

@Component({
    selector: 'app-what-im-reading',
    templateUrl: './what-im-reading.component.html',
    styleUrls: ['./what-im-reading.component.scss']
})
export class WhatImReadingComponent implements OnInit {
public width;
    public readingList: any[] = [];
    public links: string[] = [];

    public link: any;

    constructor (private linkService: LinkService) { }

    ngOnInit () {
        this.links.push('https://blog.angular.io/version-7-of-angular-cli-prompts-virtual-scroll-drag-and-drop-and-more-c594e22e7b8c');
        this.links.push('https://netbasal.com/connection-aware-components-in-angular-3a66bb0bab6f');
        this.links.push('https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9');
        this.links.push('https://itnext.io/lessons-from-a-long-week-with-firebase-b433ce8ee49e');


        this.links.forEach(link => {
            this.linkService.getDetails(link)
                .subscribe(x => {
                    this.readingList.push(x);
                });
        });
    }
}
