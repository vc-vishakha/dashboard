import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isDisplay = true;
  isDisplayed = false;
  constructor() { }

  ngOnInit() {
    // localStorage.removeItem('loginDetails');

    // if (localStorage.getItem('loginDetails')) {
    //   this.isDisplay = false;
    // }
    if ( localStorage.getItem('loginDetails') != undefined && localStorage.getItem('loginDetails') != null ) {
      this.isDisplayed = true;
    }
  }

}
