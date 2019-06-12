import { DishesService } from './dishes.service';
import { ServerService } from './server.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  dishesSubscribe = new Subscription();
  recipes = [];
  responseSuccess = true;
  responseResults;
  sendData = false;

  recipesForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    imagePath: new FormControl('')
  });

  constructor(
    private serverService: ServerService,
    private dishesService: DishesService
  ) {
    this.dishesSubscribe = this.dishesService.getDishes()
    .subscribe(
      (recipes: any[]) => {
        this.recipes = recipes;
        console.log(recipes)
      },
      (error) => console.log(error)
    );
  }

  //Hooks
  ngOnInit() {

  }
  ngOnDestroy() {
    this.dishesSubscribe.unsubscribe();
  }

  //Custom methods
  onDelete(id: number) {
    console.log(id);
    this.dishesService.deleteDishes(id)
      .subscribe(
        (response: any) => {
          this.recipes = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  onSubmit() {
    this.dishesService.postDishes({
      name: this.recipesForm.value.name,
      description: this.recipesForm.value.description,
      imagePath: this.recipesForm.value.imagePath
    })
      .subscribe(
        (response) => {
          this.responseSuccess = this.dishesService.testFunc(response).valid;
          this.responseResults = this.dishesService.testFunc(response).data;
          this.sendData = true;
          if ( this.responseSuccess) {
            setTimeout(() => {
              this.sendData = false;
            }, 3000);
            this.recipes.push(this.responseResults);
            this.recipesForm.reset();
          }
        },
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
