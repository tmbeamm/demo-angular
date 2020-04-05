import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/view-parm/view-parm.module').then(m => m.ViewParmModule) },
  { path: 'group', loadChildren: () => import('./modules/param-group/param-group.module').then(m => m.ParamGroupModule) },
  { path: 'info', loadChildren: () => import('./modules/param-info/param-info.module').then(m => m.ParamInfoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
