import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtDetailsComponent } from './art-details/art-details.component';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent} from './home/home.component'


const routes: Routes = [
  {path:"", redirectTo:'art', pathMatch:"full"},
  {path:'art',component:HomeComponent},
  {path:'art/:id',component:ArtDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent:any = [ContactComponent,HomeComponent]
