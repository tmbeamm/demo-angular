import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamGroupComponent } from './param-group.component';


const routes: Routes = [
  { path: '', component: ParamGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamGroupRoutingModule { }
