import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurStoryDetailComponent } from './about/our-story-detail/our-story-detail.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ServicesComponent } from './services/services.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { BlogModule } from './blog/blog.module';
import { AboutModule } from './about/about.module';

@NgModule({
    declarations: [
        AppComponent,
        ServicesComponent,
        QuotesComponent,
        ContactUsComponent,
        TechStackComponent,


    ],
    imports: [
        CoreModule,
        SharedModule,
        HomeModule,
        BlogModule,
        AboutModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
