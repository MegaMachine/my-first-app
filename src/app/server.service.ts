import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class ServerService {
  constructor(
    private http: HttpClient
  ) { }
  storeServers(servers: any[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // return this.http.post(
    //   'https://learning-http-request.firebaseio.com/data.json',
    //   servers,
    //   { headers: headers}
    // );
    return this.http.put(
      'https://learning-http-request.firebaseio.com/data.json',
      servers,
      { headers: headers}
    );
  }
  getServers() {
    return this.http.get('https://learning-http-request.firebaseio.com/data.json',  { observe: 'response' })
      .pipe(
        map(
          (response) => {
            const data = response.body;
            for( const server of data) {
              server.name = 'FETCHED_' + server.name;
            }
            return data;
          }
        )
      )
  }
}
