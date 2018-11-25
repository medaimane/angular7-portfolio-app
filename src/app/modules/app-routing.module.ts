import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/portfolio', pathMatch : 'full'},
  {path: 'portfolio', component: HomeComponent, data: {name : 'medaimane'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
