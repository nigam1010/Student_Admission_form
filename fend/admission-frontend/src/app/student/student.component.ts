import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  imports: [FormsModule, NgIf],
})
export class StudentComponent {
  student = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    address: '',
    course: '',
    year: 1,
  };
  registrationMessage: string | null = null;
  registrationSuccess = false;
  loading = false;

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit() {
    this.loading = true;

    this.studentService.registerStudent(this.student).subscribe(
      (response) => {
        this.loading = false;
        this.registrationMessage =
          'Submitted successfully. If you have any queries, contact admin.';
        this.registrationSuccess = true;
        this.student = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          gender: '',
          dob: '',
          address: '',
          course: '',
          year: 1,
        };
      },
      (error) => {
        this.loading = false;
        console.error(error);
        alert('Something went wrong! Please try again later.');
      }
    );
  }

  // Function to navigate to the main page
  goBack() {
    this.router.navigate(['/']);
  }
}
