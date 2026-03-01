import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  addEmployee(data: any): Observable<any> {
    return this._http.post('https://employees-api-ng96.onrender.com/employees', data);
  }
  getEmployee(): Observable<any> {
    return this._http.get('https://employees-api-ng96.onrender.com/employees');
  }
  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://employees-api-ng96.onrender.com/employees/${id}`, data);
  }
  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://employees-api-ng96.onrender.com/employees/${id}`);
  }
}
