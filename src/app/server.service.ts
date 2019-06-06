import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  constructor(
    private http: HttpClient
  ) { }
  storeServers(servers: any[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(
      'https://learning-http-request.firebaseio.com/data.json',
      servers,
      { headers: headers}
    );
  }
  getServers() {
    return this.http.get('https://learning-http-request.firebaseio.com/data.json',  { observe: 'response' });
  }
}
