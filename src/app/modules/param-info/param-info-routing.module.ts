import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamInfoComponent } from './param-info.component';


const routes: Routes = [
  { path: '', component: ParamInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamInfoRoutingModule { }
