import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',  // Global provider
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/api/students';  // Ensure this matches the backend route

  constructor(private http: HttpClient) {}

  // Method to register the student
  registerStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, studentData);
    
  }
}
