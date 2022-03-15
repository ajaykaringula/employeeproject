import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalinfoService } from '../personalinfo.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  allemployees:any=[];
  constructor(private personalinfoservice:PersonalinfoService,private router:Router) 
  { 
   this.personalinfoservice.getallemployees().subscribe(
     (data:any)=>{
       this.allemployees=data;
     },
     (error:any)=>{
       alert("serverdown");
     }
   )
  }

  ngOnInit(): void {
  }
  view(id:any)
  {
    this.router.navigateByUrl("/personalinfo/employeedetails/"+id);
  }

}
