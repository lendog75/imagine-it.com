import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../core/services/quotes.service';
import { Quote } from '../shared/models/quote';
import { rollInTransition, rollDownTransition, scaleTransition } from '../shared/animations';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  animations: [
    scaleTransition, rollInTransition, rollDownTransition
  ]
})
export class QuotesComponent implements OnInit {
public quotes: Array<Quote> = [];
  constructor(private quoteSvc: QuotesService) { }

  public state = 'large';

  ngOnInit() {
    this.quoteSvc.getQuotes().subscribe((x: Array<Quote>) => {
      this.quotes = x;
      console.log(this.quotes);
    });

  }

  public removeItem(event, i: number) {
    console.log(event);
    console.log(i);
    this.quotes.splice(i,1);

  }

  toggleState() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
