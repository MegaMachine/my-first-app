import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  selectOption: string;
  optionsGroup: SelectItem[];
  constructor() {
    this.optionsGroup = [
      {
        label: 'To Shopping List',
        value:'1'
      },
      {
        label: 'Edit Recipe',
        value:'1'
      },
      {
        label: 'To Shopping List',
        value:'1'
      }
    ]
  }

  ngOnInit() {
  }

}
