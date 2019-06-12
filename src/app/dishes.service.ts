import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class DishesService {
  constructor(
    private http: HttpClient
  ) { }

  getDishes() {
    return this.http.get('http://localhost:5000/recipes');
      // .pipe(
      //   map(
      //     (response: any) => {
      //       const data = response;
      //       return data;
      //     }
      //   )
      // )
      // .pipe(
      //   catchError(
      //     (error) => {
      //       return throwError(error.message);
      //     }
      //   )
      // );
  }
  postDishes(dishes) {
    return this.http.post('http://localhost:5000/recipes/add', dishes);
  }
  deleteDishes(id) {
    const data = {
      id: id
    };
    return this.http.delete('http://localhost:5000/recipes/' + id);
  }

testFunc(responce) {
  if (responce.success) {
    return {data: responce.result, valid: true};
  } else {
    return {data: responce.errors, valid: false}
  }
}

}
