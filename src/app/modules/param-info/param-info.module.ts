import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamInfoRoutingModule } from './param-info-routing.module';
import { ParamInfoComponent } from './param-info.component';


@NgModule({
  declarations: [ParamInfoComponent],
  imports: [
    CommonModule,
    ParamInfoRoutingModule
  ]
})
export class ParamInfoModule { }
