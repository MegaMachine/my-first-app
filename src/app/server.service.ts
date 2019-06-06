import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  constructor(
    private http: HttpClient
  ) { }
  storeServers(servers: any[]) {
    return this.http.post('https://learning-http-request.firebaseio.com/data.json', servers);
  }
}
