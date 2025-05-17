// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';  // Import StudentComponent
import { MainComponent } from './main/main.component';  // Import MainComponent
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './adminpage/adminpage.component';

export const routes: Routes = [
  { path: '', component: MainComponent },  // Default route
  { path: 'student', component: StudentComponent, pathMatch: 'full' },  // Make sure 'full' pathMatch is specified
  { path: 'admin', component: AdminComponent },
  { path: 'adminpage', component: AdminPageComponent } 

];
