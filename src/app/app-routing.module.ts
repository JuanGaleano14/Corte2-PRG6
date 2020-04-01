import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaComponent } from './components/tabla/tabla.component';


const routes: Routes = [
  {path: '',   redirectTo: '/infoPersonas', pathMatch: 'full'},
  { path: 'infoPersonas', component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
