import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListNewsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    HomeComponent,
    FooterComponent,
    SpinnerComponent,
    BusinessComponent,
    EntertainmentComponent,
    ScienceComponent,
    SportsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
