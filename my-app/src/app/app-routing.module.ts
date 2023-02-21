import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path:'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'about', component: AboutComponent},

  {path: "**", redirectTo: "", component: MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
