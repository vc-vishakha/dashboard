import { Component } from '@angular/core';

import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-app';

  opened: boolean;
  isDisplayed : boolean = false;

  constructor( private myRoute : Router ){

    // if ( localStorage.getItem('loginDetails') != undefined && localStorage.getItem('loginDetails') != null ) {
    //   this.isDisplayed = true;
    // }
  }

  // logout(){
  //   localStorage.removeItem("LoggedInUser");
  //   localStorage.removeItem("loginDetails");
  //   this.myRoute.navigate(["dashboard"]);
  // }  
  
}
