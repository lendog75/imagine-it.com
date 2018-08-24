import { Component, OnInit } from '@angular/core';
import { rollInTransition } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [rollInTransition]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
