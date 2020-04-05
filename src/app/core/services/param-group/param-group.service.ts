import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InsertParamGroupRequest } from 'src/app/modules/param-group/model/ParamGroupRequest.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ParamGroupService {

  constructor(
    private http: HttpClient
  ) { }

  inquiryParamGroup(): Observable<any> {
    let url = 'http://localhost:8080/prior-api/api/param/group/all';
    return this.http.get<any>(url, httpOptions).pipe(
      tap(_ => console.log("inquiryParamGroup success"))
    )
  }

  insertParamGroup(request:InsertParamGroupRequest): Observable<any> {
    let url = 'http://localhost:8080/prior-api/api/param/group/insert';
    return this.http.post<any>(url, request, httpOptions).pipe(
      tap(_ => console.log("insertParamGroup success"))
    )
  }
  
}
