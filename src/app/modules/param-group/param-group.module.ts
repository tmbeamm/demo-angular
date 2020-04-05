import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamGroupRoutingModule } from './param-group-routing.module';
import { ParamGroupComponent } from './param-group.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ParamGroupService } from 'src/app/core/services/param-group/param-group.service';



@NgModule({
  declarations: [
    ParamGroupComponent
  ],
  imports: [
    CommonModule,
    ParamGroupRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    ParamGroupService
  ]
})
export class ParamGroupModule { }
