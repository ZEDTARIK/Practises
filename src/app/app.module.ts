import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { ListClientComponent } from './components/clients/list-client/list-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
