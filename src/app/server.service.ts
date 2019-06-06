import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
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
    return this.http.get('https://learning-http-request.firebaseio.com/data.json')
      .pipe(
        map(
          (response: any) => {
            const data = response;
            for( const server of data) {
              server.name = 'FETCHED_' + server.name;
            }
            return data;
          }
        )
      )
      .pipe(
        catchError(
          (error) => {
            return throwError(error.message);
          }
        )
      );
  }
  getAppName() {
    return this.http.get('https://learning-http-request.firebaseio.com/appName.json')
      .pipe(
        map(
          (response: Response) => {
            return response;
          }
        )
      );
  }
}
