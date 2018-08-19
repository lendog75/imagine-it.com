import { Component, OnInit } from '@angular/core';
import { slideRightTransition, slideLeftTransition, rollDownTransition } from '../animations';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  animations: [
    slideRightTransition, slideLeftTransition, rollDownTransition
  ]
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
