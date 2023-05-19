import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galeria', component: GaleriaComponent },
  // Outras rotas do seu projeto
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
