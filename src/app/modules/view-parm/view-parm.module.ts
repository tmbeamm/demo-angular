import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewParmRoutingModule } from './view-parm-routing.module';
import { ViewParmComponent } from './view-parm.component';
import { ParamGroupService } from 'src/app/core/services/param-group/param-group.service';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ViewParmComponent],
  imports: [
    CommonModule,
    ViewParmRoutingModule,
    MaterialModule
  ],
  providers: [
    ParamGroupService
  ]
})
export class ViewParmModule { }
