import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com'; // Replace with your API URL
  private gitRepUrl = 'https://api.github.com/users/marotiuppe/repos';
  private gitSecrest = '';
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
    let headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': this.gitSecrest
    });
    return this.http.get<any>(this.gitRepUrl,{ headers });
  }
  getDataByUrl(url:any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': this.gitSecrest
    });
    return this.http.get<any>(url,{headers});
  }
}
