import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../shared/animations';
import { BlogSummary } from './models/blog-summary';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [pageTransition]
})
export class BlogComponent implements OnInit {

  blogSummary: BlogSummary;
  constructor() { }

  ngOnInit() {
    this.blogSummary = { title: 'test123', subtitle: 'subtitle',
      summaryText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Odio aenean sed adipiscing diam donec. Iaculis nunc sed augue lacus viverra vitae`,
      imageSrc: 'assets/img/other/lenny-win.jpg',
      actionRoute: '/', date: '1/2/2018', tags: 'test1, test2'}
  }

}
