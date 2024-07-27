
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'https://api.example.com'; // Replace with your API URL
  private gitRepUrl = 'https://api.github.com/users/marotiuppe/repos';
  constructor(private http: HttpClient) {}

  // Example GET request
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  // Example POST request
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data);
  }

  getAllGitReposData(): Observable<any> {
    return this.http.get<any>(this.gitRepUrl);
  }
}
