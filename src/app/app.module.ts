import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { CreateemployeeformComponent } from './createemployeeform/createemployeeform.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactUsModule } from './contact-us/contact-us.module';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { ShopingComponent } from './shoping/shoping.component';
import { ProductlistComponent } from './shoping/productlist/productlist.component';
import { ProductdetailsComponent } from './shoping/productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonalinfoComponent,
    CreateemployeeformComponent,
    MyprofileComponent,
    EmployeedetailsComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    ShopingComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,ContactUsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

