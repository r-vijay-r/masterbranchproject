import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import { AuthProviders,AuthMethods} from 'angularfire2';

const firebaseConfig = {
 apiKey: "AIzaSyC6IOIF7iMhwFcNUBxVwUNMgneO3nWEwnA",
 authDomain: "angularfire2-1d8f3.firebaseapp.com",
 databaseURL: "https://angularfire2-1d8f3.firebaseio.com/",
 storageBucket: "gs://angularfire2-1d8f3.appspot.com"
}
const AuthenticationConfig = {
   method: AuthMethods.Popup,
   provider: AuthProviders.Google
 }
    AngularFireModule.initializeApp(firebaseConfig, AuthenticationConfig)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }