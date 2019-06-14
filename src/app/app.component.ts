import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  onNavigate( feature: string ) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjBvW5OiFPxoNNKhNNV93O2BkEcrFFwwA',
      authDomain: 'learning-http-request.firebaseapp.com'
    });
  }
}
