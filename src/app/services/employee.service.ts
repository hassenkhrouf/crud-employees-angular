import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  addEmployee(data: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}/employees`, data);
  }
  getEmployee(): Observable<any> {
    return this._http.get(`${environment.apiUrl}/employees`);
  }
  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${environment.apiUrl}/employees/${id}`, data);
  }
  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/employees/${id}`);
  }
}
