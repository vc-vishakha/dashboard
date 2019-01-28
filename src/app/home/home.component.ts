import { Component, OnInit ,ElementRef, EventEmitter, Input, Output} from '@angular/core';

import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginDetails = "";
  userDetails = [];
  isDisplayed : boolean = true;

  constructor(private router: Router , private auth: AuthService) {    
    this.setLoginDetails();
  }
  @Input()  size: number | string = 20;
  @Output() sizeChange = new EventEmitter<number | string>();
 
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
 
  resize(delta: number) {
    this.size = Math.min(40, Math.max(1, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  ngOnInit() {
    console.log("Home");    
  }  
  
  setLoginDetails(){
    if( localStorage.getItem('loginDetails') != undefined && localStorage.getItem('loginDetails') != null )  {
      this.userDetails = JSON.parse(localStorage.getItem('loginDetails'));      
    }else{
      alert("Please login with valid credentials");
      setTimeout(function(){
          // this.router.navigate(['dashboard']);
          window.history.go(-1);
      },300);
    }
  }

  // logOut(){
  //   // alert("You have been logged out !")
  //   localStorage.removeItem('loginDetails');
  //   localStorage.removeItem('LoggedInUser');
  //   this.router.navigate(['dashboard']);
  // }
}
