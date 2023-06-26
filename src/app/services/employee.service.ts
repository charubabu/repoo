import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

 export interface Employee { 
  'CSC_DoJ':any;
   'Employee ID': any;
  'EmployeeName': any;
   'Dedalus ID': any;
   'HL Designation':any;
   'Location':any;
   'HLRole':any;
   'HL Title':any;
   'Employee_MailId':any;
   'Manager Email':any;
   'Owning':any;
   'Product':any;
   'Product Group':any;
   'Product Work Area':any;
   'Reporting Manager':any;
   'Unified Roles':any;
  'Unit':any;
   'Work Group':any;
   visible: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dataUrl = 'http://nhsappchna6210.cscidp.net/rdb/api/employee?co=';

  constructor(private http: HttpClient) {}

  getData(id:any): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl+id);
  }

getemployessDeta
  (employeeId1:any,reportee?:any,peer?:any){
    return forkJoin([this.getData1(employeeId1),this.getReportee(employeeId1,reportee),this.getPeer(employeeId1,peer)])
  }

  //using api charu
  getEmployeeById(employeeId1: any): Observable<any> {
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/employee/`+employeeId1; 
    return this.http.get<any>(url);
  } 

  
  getData1(employeeId1: any): Observable<any> {
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/employee/`+employeeId1; 
    return this.http.get<any>(url);
  }

  getReportee(employeeId1: any,reportee:any): Observable<any> {
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/Team/`+employeeId1+"?mode="+reportee;
    return this.http.get<any>(url);
  }

  getPeer(employeeId1: any,peer:any): Observable<any> {   
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/Team/`+employeeId1+"?mode="+peer;
    return this.http.get<any>(url);
  }
}
