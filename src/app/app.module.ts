import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import {RouterModule, Routes} from '@angular/router';
// import { CreateEmployeeComponent } from './employees/create-employee.component';
// import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
// import { EmployeeService } from './employees/employee.service';
// import { DisplayEmployeeComponent } from './employees/display-employee.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  // {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
