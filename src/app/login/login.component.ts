import { Component, OnInit , Inject } from '@angular/core';

import {  FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar ,  MAT_SNACK_BAR_DATA } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router , private formBuilder: FormBuilder,private auth: AuthService ,  public snackBar: MatSnackBar) { }

  // local variables
  usernm = "" ; userPswd = "" ;
  // form data variables
  loginForm: FormGroup;
  submitted = true ; userName = "";  pswd = "";  hide = true ;

  ngOnInit() {
    console.log("login component");
    this.loginForm = this.formBuilder.group({
       userName : ['',Validators.required],
       pswd : ['',[Validators.required ,Validators.minLength(6)]],
    });
  }

  openSnackBar(msg : string ) {
    this.snackBar.openFromComponent(SnackComponent,
    {
      duration: 800,
      data: msg,
      horizontalPosition: 'start',
      verticalPosition: 'top'
    }
    );
  }

  get f() { return this.loginForm.controls; }

  loginSubmit(){

     this.submitted = false;
    if (this.loginForm.valid) {
        this.submitted = true;

        console.log(this.loginForm);
        let formDataVal = this.loginForm.value;

        this.usernm = formDataVal.userName;
        this.userPswd = formDataVal.pswd;        
          
        let loginObj :any = [];
        
        let signUpArr = {
          userName : this.usernm,
          pswd :this.userPswd,
        };
        console.log(signUpArr);
        let loginFlag = false; let pswdFlag = false; let stopFlag = false;
        
        if( localStorage.getItem('dashboardSignUpData') != undefined && localStorage.getItem('dashboardSignUpData') != "undefined" && localStorage.getItem('dashboardSignUpData') != "" && localStorage.getItem('dashboardSignUpData') != null ){
          let existingOb = JSON.parse(localStorage.getItem('dashboardSignUpData'));
          existingOb.forEach(function(record,index) {
            if( !stopFlag ){          
              if( record.userName != signUpArr.userName ){
                loginFlag = true;
              }else if( record.userName == signUpArr.userName && record.pswd != signUpArr.pswd ){
                loginFlag = false;
                pswdFlag = true;
                stopFlag = true;
                return false;
              }else if( record.userName == signUpArr.userName && record.pswd == signUpArr.pswd ){
                loginFlag = false;
                pswdFlag = false;
                stopFlag = true;
                let loginDetails = JSON.stringify(record);
                localStorage.setItem('loginDetails',loginDetails);
                return false;
              }
            }
          });
        }else{
          this.openSnackBar("This user doesn't exists");
          loginFlag = true;
          return false;
        }      
        if( loginFlag ){
          this.openSnackBar("This username doesn't exists");
          console.log("Login Unuccessfull");
          return false;
          
        }else if( pswdFlag ){
          this.openSnackBar("Incorrect password");
          console.log("Login Unuccessfull");
          return false;
          
        }else{
          console.log("Login Successfull");
          this.auth.sendToken(this.loginForm.value.userName);
          this.loginForm.reset();
          this.router.navigate(['home']);
        }
        // return false;      
    }
  }
  
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-comp">
    {{data}}
  </span>`,
  styleUrls: ['./login.component.css']
})
export class SnackComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}