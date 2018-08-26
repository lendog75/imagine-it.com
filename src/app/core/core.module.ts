import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuotesService } from './services/quotes.service';
import { TechService } from './services/tech.service';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes }  from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    MobileMenuComponent,
    MainNavComponent,
  ],
  providers: [
    QuotesService,
    TechService
  ],
  exports: [
    FooterComponent,
    MobileMenuComponent,
    MainNavComponent,
  ]
})
export class CoreModule { }
