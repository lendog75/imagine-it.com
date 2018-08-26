import { Component, OnInit } from '@angular/core';
import { pageTransition } from 'src/app/shared/animations';


@Component({
  selector: 'app-our-story-detail',
  templateUrl: './our-story-detail.component.html',
  styleUrls: ['./our-story-detail.component.scss'],
  animations: [pageTransition]
})
export class OurStoryDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
