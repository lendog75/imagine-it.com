import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarouselComponent, SocialIconsComponent, CardComponent]
})
export class SharedModule { }
