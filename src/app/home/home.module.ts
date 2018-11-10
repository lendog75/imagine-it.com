import { NgModule } from '@angular/core';
import { CapabilitiesComponent } from '../shared/components/capabilities/capabilities.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MainSliderComponent } from 'src/app/home/main-slider/main-slider.component';

import { OurStoryComponent } from 'src/app/home/our-story/our-story.component';
import { BlockTechComponent } from '../shared/components/block-tech/block-tech.component';
import { TechCardComponent } from 'src/app/home/tech-card/tech-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        MainSliderComponent,
        OurStoryComponent,
    ],
    imports: [SharedModule]
})
export class HomeModule {
}
