import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { FullPortfolioComponent } from '../components/full-portfolio/full-portfolio.component';
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch : 'full'},
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: FullPortfolioComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
