import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ParamGroupService } from 'src/app/core/services/param-group/param-group.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-parm',
  templateUrl: './view-parm.component.html',
  styleUrls: ['./view-parm.component.scss']
})
export class ViewParmComponent implements OnInit {

  displayedColumns: string[] = ['paramGroup', 'paramEnDescription', 'paramThDescription'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private paramGroupService: ParamGroupService
  ) { }

  ngOnInit(): void {
    this.paramGroupService.inquiryParamGroup().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    });
  }

}
