import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { OurStoryDetailComponent } from './about/our-story-detail/our-story-detail.component';

const appRoutes: Routes = [

    { path: 'contact', component: ContactUsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'our-tech', component: TechStackComponent },
    { path: 'our-story', component: OurStoryDetailComponent },
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        //RouterModule.forRoot(
        //    appRoutes,
        //    { enableTracing: true } // <-- debugging purposes only
        //)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

//
//const appRoutes: Routes = [
//    { path: 'crisis-center', component: CrisisListComponent },
//    { path: 'heroes',        component: HeroListComponent },
//    { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
//    { path: '**', component: PageNotFoundComponent }
//];