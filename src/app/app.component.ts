import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  singupForm: FormGroup;

  ngOnInit() {
    this.singupForm = new FormGroup({
      'username': new FormControl( null, Validators.required ),
      'email': new FormControl( null, [Validators.required, Validators.email] ),
      'gender': new FormControl( 'female' )
    });
  }

  onSubmit() {
    console.log( this.singupForm );
  }
}
