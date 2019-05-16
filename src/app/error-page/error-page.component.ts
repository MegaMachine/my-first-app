import { Subscription } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data.message;
    this.route.data.subscribe(( data: Data ) => {
      this.errorMessage = data.message;
    });
  }
  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }
}
