import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../shared/animations';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  animations: [pageTransition]
})
export class TechStackComponent implements OnInit {
  coverText: string[] = ['Out Tech Stack'];
  constructor() { }

  ngOnInit() {
  }

}
