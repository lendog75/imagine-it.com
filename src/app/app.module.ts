import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ServicesComponent } from './services/services.component';
import { OurTechComponent } from './our-tech/our-tech.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CoreModule } from './core/core.module';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentBlockComponent } from './shared/components/content-block/content-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    HomeComponent,
    FooterComponent,
    MainSliderComponent,
    OurStoryComponent,
    ServicesComponent,
    OurTechComponent,
    MobileMenuComponent,
    QuotesComponent,
    SocialIconComponent,
    ContentBlockComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
