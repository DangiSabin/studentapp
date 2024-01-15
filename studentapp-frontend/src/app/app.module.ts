import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

const routes: Routes = [
  { path:"student-list", component: StudentListComponent },
  { path:"", redirectTo: '/student-list', pathMatch: 'full'},
  { path:"student-add", component: StudentAddComponent },
  { path:"student-update", component: StudentUpdateComponent },
 
]
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
