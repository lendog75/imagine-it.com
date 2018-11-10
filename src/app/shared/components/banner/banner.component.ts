import { Component, OnInit, Input } from '@angular/core';
import { rollDownTransition, rollInTransition, slideLeftTransition, slideRightTransition } from '../../animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    slideRightTransition, slideLeftTransition, rollDownTransition, rollInTransition
  ]
})
export class BannerComponent implements OnInit {
  @Input() heroImagePath = 'd';
  @Input() coverText: string[] = [];
  @Input() coverImagePath = '';

  constructor() { }

  ngOnInit() {
  }
}

