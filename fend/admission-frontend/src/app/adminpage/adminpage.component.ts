import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-adminpage',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, CommonModule],
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminPageComponent implements OnInit {
  students: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.http.get<any[]>('http://localhost:3000/api/students').subscribe({
      next: (data) => {
        console.log('Fetched students:', data);
        this.students = data;
      },
      error: (err) => console.error('Failed to fetch students', err)
    });
  }

  deleteStudent(email: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.http.delete(`http://localhost:3000/api/students/${email}`).subscribe({
        next: () => {
          this.students = this.students.filter(student => student.email !== email);
        },
        error: (err) => console.error('Error deleting student', err)
      });
    }
  }

  editStudent(email: string): void {
    alert('Edit functionality not implemented yet for: ' + email);
  }

  downloadAsExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.students);
    const workbook = { Sheets: { 'Students': worksheet }, SheetNames: ['Students'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(data, 'Registered_Students.xlsx');
  }

  logout(): void {
    this.router.navigate(['/']);
  }
}
