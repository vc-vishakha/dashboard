import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isDisplayed;
  constructor( private myRoute : Router ) { }
   
  ngOnInit() {
    if ( localStorage.getItem('loginDetails') != undefined && localStorage.getItem('loginDetails') != null ) {
      this.isDisplayed = true;
    }
  }
  logout(){
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("loginDetails");
    this.myRoute.navigate(["/dashboard"]);
    this.ngOnInit()
  }  

}
