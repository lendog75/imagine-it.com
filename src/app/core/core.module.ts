import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuotesService } from './services/quotes.service';
import { TechService } from './services/tech.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    QuotesService,
    TechService
  ]
})
export class CoreModule { }
