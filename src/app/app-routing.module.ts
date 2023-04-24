import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {HomeComponent} from "./components/home/home.component";
import {BusinessComponent} from "./components/business/business.component";
import {EntertainmentComponent} from "./components/entertainment/entertainment.component";
import {ScienceComponent} from "./components/science/science.component";
import {SportsComponent} from "./components/sports/sports.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'business', component: BusinessComponent},
  {path:'entertainment', component: EntertainmentComponent},
  {path:'science', component: ScienceComponent},
  {path:'sports', component: SportsComponent},
  {path:'user-details', component: UserDetailsComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
