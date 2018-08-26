import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../../shared/models/quote';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }


  getQuotes() {
    return this.http.get<Array<Quote>>('/assets/data/quotes.json');
  }
}
