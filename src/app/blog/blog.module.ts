import { NgModule } from '@angular/core';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BlogComponent,
        BlogCardComponent
    ],
    imports: [
        SharedModule
    ]
})

export class BlogModule {
}
