import { Component, Input, OnInit } from '@angular/core';
import { BlogSummary } from '../models/blog-summary';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() public summary: BlogSummary;

  constructor() { }

  ngOnInit() {
  }

}
