// src/app/admin/admin.component.ts
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ⬅️ Import router

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports:[NgIf, FormsModule]
})
export class AdminComponent {
  admin = {
    username: '',
    password: ''
  };
  loginMessage = '';
  loading = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.loading = true;
    console.log('Admin login data:', this.admin);

    setTimeout(() => {
      this.loading = false;
      if (this.admin.username === 'admin' && this.admin.password === 'admin123') {
        this.loginMessage = 'Login successful!';
        this.router.navigate(['/adminpage']); // ⬅️ Navigate after login
      } else {
        this.loginMessage = 'Invalid credentials. Please try again.';
      }
    }, 1500);
  }
}
