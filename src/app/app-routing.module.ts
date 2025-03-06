import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { InvolvedPageComponent } from './pages/involved-page/involved-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'about', component:AboutPageComponent},
  {path:'projects', component:ProjectsPageComponent},
  {path:'involved', component:InvolvedPageComponent},
  {path:'contact', component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
