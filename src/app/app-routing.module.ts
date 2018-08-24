import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';




const appRoutes: Routes = [

    { path: 'contact', component: ContactUsComponent },
    { path: 'blog', component: BlogComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
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