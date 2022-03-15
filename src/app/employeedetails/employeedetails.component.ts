import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  details:any={}

  constructor(private employeedetailsservice:EmployeedetailsService,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(
      (data:any)=>{
        // console.log(data);
        this.employeedetailsservice.getemployeedetails(data.id).subscribe(
          (data:any)=>{
            this.details=data;
          },
          (error:any)=>{
            alert("serverdown");
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
