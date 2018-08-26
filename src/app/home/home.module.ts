import { NgModule } from '@angular/core';
import { CapabilitiesComponent } from 'src/app/home/capabilities/capabilities.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MainSliderComponent } from 'src/app/home/main-slider/main-slider.component';

import { OurStoryComponent } from 'src/app/home/our-story/our-story.component';
import { OurTechComponent } from 'src/app/home/our-tech/our-tech.component';
import { TechCardComponent } from 'src/app/home/tech-card/tech-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        CapabilitiesComponent,
        MainSliderComponent,
        OurStoryComponent,
        OurTechComponent,
        TechCardComponent
    ],
    imports: [SharedModule]
})
export class HomeModule {
}
