import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBhI1TKaRqVqtN9TmqcZSLPHUYO9n16d8I",
      authDomain: "ng-recipe-book-c3aba.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-c3aba.firebaseio.com",
      projectId: "ng-recipe-book-c3aba",
      storageBucket: "ng-recipe-book-c3aba.appspot.com",
      messagingSenderId: "12170100124"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
