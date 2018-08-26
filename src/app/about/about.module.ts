import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OurStoryDetailComponent } from './our-story-detail/our-story-detail.component';

@NgModule({
    declarations: [
        OurStoryDetailComponent,
    ],
    imports: [
        SharedModule
    ]
})

export class AboutModule {
}
