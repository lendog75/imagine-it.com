import { NgModule } from '@angular/core';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { TechCardComponent } from './home/tech-card/tech-card.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ServicesComponent } from './services/services.component';

import { SharedModule } from './shared/shared.module';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        ServicesComponent,
        QuotesComponent,
        ContactUsComponent,
        TechStackComponent,
        TechCardComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        HomeModule,
        BlogModule,
        AboutModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
