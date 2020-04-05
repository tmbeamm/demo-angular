import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewParmComponent } from './view-parm.component';


const routes: Routes = [
  { path: '', component: ViewParmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewParmRoutingModule { }
