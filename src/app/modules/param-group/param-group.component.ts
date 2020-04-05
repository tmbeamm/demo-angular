import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParamGroupService } from 'src/app/core/services/param-group/param-group.service';
import { InsertParamGroupRequest } from './model/ParamGroupRequest.model';

@Component({
  selector: 'app-param-group',
  templateUrl: './param-group.component.html',
  styleUrls: ['./param-group.component.scss']
})
export class ParamGroupComponent implements OnInit {

  createParamGroup: FormGroup

  constructor(
    private _FormBuild: FormBuilder,
    private paramGroupService: ParamGroupService
  ) { }

  ngOnInit(): void {
    this.createParamGroup = this._FormBuild.group({
      paramGroup: [''],
      paramEnDescription: [''],
      paramThDescription: ['']
    });
  }

  onSubmit() {
    console.log(this.createParamGroup);
    let request = new InsertParamGroupRequest();
    request.paramGroup = this.createParamGroup.controls['paramGroup'].value;
    request.paramEnDescription = this.createParamGroup.controls['paramEnDescription'].value;
    request.paramThDescription = this.createParamGroup.controls['paramThDescription'].value;
    this.paramGroupService.insertParamGroup(request).subscribe((res) => {

    }, (error) => {

     });
  }



}
