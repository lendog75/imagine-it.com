import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { CardComponent } from './components/card/card.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  declarations: [
    CarouselComponent,
    SocialIconsComponent,
    CardComponent,
    SocialIconComponent,
    ContentBlockComponent,
  ],
  exports: [
    CarouselComponent,
    SocialIconsComponent,
    CardComponent,
    ContentBlockComponent,
    SocialIconComponent,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,

  ]
})
export class SharedModule { }
