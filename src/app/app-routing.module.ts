import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryDetailComponent } from './about/our-story-detail/our-story-detail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

const appRoutes: Routes = [
    { path: 'contact', component: ContactUsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'tech', component: TechStackComponent },
    { path: 'story', component: OurStoryDetailComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ]

})
export class AppRoutingModule {
}
