import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuotesService } from './services/quotes.service';
import { TechService } from './services/tech.service';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes }  from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [

  ],
  providers: [
    QuotesService,
    TechService
  ],
  exports: [

  ]
})
export class CoreModule { }
