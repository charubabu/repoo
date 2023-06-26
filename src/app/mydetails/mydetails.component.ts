import { Component } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent {
  employeeId! : string;
  employee: any;
  empId: any;
  constructor(private employeeService: EmpDataService,private route: ActivatedRoute) { 
    this.empId = sessionStorage.getItem("empId");
    this.readdata(this.empId);
    }


    readdata(empId: any) {
      this.employeeService.getEmployeeById(empId).subscribe(
        (response: any) => {
          if (empId == response.EmployeeCode){
            this.employee = response;
          }
        }) 
    }

  ngOnInit(): void {
   this.employeeId = this.employeeService.getId();
      console.log(this.employeeId);
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data) => {
        console.log(data);
        if(data){
          this.employee = data;
        }
      },
      (error) => {
        console.error(error);
      }
    )}
}

