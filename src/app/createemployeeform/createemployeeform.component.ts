import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createemployeeform',
  templateUrl: './createemployeeform.component.html',
  styleUrls: ['./createemployeeform.component.css']
})
export class CreateemployeeformComponent implements OnInit {

  // constructor() { }
  createemployeeForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    mobile:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pin:new FormControl()
    }),
    education:new FormArray([]),
    role:new FormControl()
  })
  get educationFormArray()
  {
    return this.createemployeeForm.get('education')as FormArray;
  }
  getdetails(){
    this.educationFormArray.push(
      new FormGroup({
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      })
    )
  }
  submit(){
    alert("submitted")
    console.log(this.createemployeeForm);
 
  }
  delete(i:any){
    this.educationFormArray.removeAt(i);
  }
  constructor() { 
  this.createemployeeForm.get('role')?.valueChanges.subscribe(
      data=>{
      if(data=='frontend engineer')
      {
        this.createemployeeForm.addControl('frontend engineer',new FormControl());
        this.createemployeeForm.removeControl('backend engineer');
      }
      else{
        this.createemployeeForm.addControl('backend engineer',new FormControl());
        this.createemployeeForm.removeControl('frontend engineer');
      }
    }
   )
  }

  ngOnInit(): void {
  }

}
