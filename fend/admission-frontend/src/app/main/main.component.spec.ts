// src/app/main/main.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router service

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) {}

  // Method to navigate to Student Registration page
  navigateToStudentRegistration() {
    this.router.navigate(['/student']);
  }

  // Method to navigate to Admin Login page
  navigateToAdminLogin() {
    this.router.navigate(['/admin']);
  }
}
