import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { CardComponent } from './components/card/card.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlockInfoComponent } from './components/block-info/block-info.component';
import { BlockContactUsComponent } from './components/block-contact-us/block-contact-us.component';
import { CardBasicComponent } from './components/card-basic/card-basic.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatImReadingComponent } from './components/what-im-reading/what-im-reading.component';
import { BlockTechComponent } from './components/block-tech/block-tech.component';
import { CapabilitiesComponent } from './components/capabilities/capabilities.component';

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
    MainNavComponent,
    BannerComponent,
    BlockInfoComponent,
    BlockContactUsComponent,
    CardBasicComponent,
    FooterComponent,
    MobileMenuComponent,
    WhatImReadingComponent,
    BlockTechComponent,
    CapabilitiesComponent,
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
    BannerComponent,
    BlockInfoComponent,
    BlockContactUsComponent,
    CardBasicComponent,
    FooterComponent,
    MobileMenuComponent,
    MainNavComponent,
    WhatImReadingComponent,
    BlockTechComponent,
    CapabilitiesComponent,
  ]
})
export class SharedModule { }
