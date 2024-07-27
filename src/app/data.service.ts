import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com'; // Replace with your API URL
  private gitRepUrl = 'https://api.github.com/users/marotiuppe/repos';
  // private gitAuthorization = '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';
  private gitAuthorization = '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';
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
      'Authorization': this.gitAuthorization
    });
    return this.http.get<any>(this.gitRepUrl,{ headers });
  }
  getDataByUrl(url:any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': this.gitAuthorization
    });
    return this.http.get<any>(url,{headers});
  }
}
