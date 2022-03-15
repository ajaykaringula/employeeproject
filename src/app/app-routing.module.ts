import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { CompanyInfoComponent } from './contact-us/company-info/company-info.component';
import { CreateemployeeformComponent } from './createemployeeform/createemployeeform.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ShopingComponent } from './shoping/shoping.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"personalinfo",component:PersonalinfoComponent,children:[
  {path:"createemployeeform",component:CreateemployeeformComponent},
  {path:"myprofile",component:MyprofileComponent},
  {path:"contact-us",component:CompanyInfoComponent},
    {path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {path: 'roles',
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
  },
  {path:"employeedetails/:id",component:EmployeedetailsComponent},
  {path:"communication",component:CommunicationComponent},
  {path:"shoping",component:ShopingComponent}
  ]
 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
