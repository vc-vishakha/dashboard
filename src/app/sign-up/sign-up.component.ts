import { Component, OnInit , Inject } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import {MatSnackBar , MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService , public snackBar: MatSnackBar) {
    console.log("Sign Up");
  }
  // form data variables
  signUpForm: FormGroup;
  submitted = true;  hideP = true; hideCP = true;
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      pswd: ['', [Validators.required, Validators.minLength(6)]],
      cnfPswd: ['', [Validators.required, Validators.minLength(6)]]
    },{
       validator: ConfirmPasswordValidator.MatchPassword // CUSTOM VALIDATOR FOR PSWD MATCH
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

  get f() { return this.signUpForm.controls; }

  signUp() {

    this.submitted = false;    
    let formDataVal = this.signUpForm.value;

    if (this.signUpForm.valid) {
      this.submitted = true;
      
      let loginObj: any = [];

      let signUpArr = {
        fullName: formDataVal.fullName,
        userName: formDataVal.userName,
        pswd: formDataVal.pswd,
        cnfmPswd:formDataVal.cnfPswd,
        email: formDataVal.emailId,
        id : "1"
      };

      // console.log(jsonData);      
      if (localStorage.getItem('dashboardSignUpData') != undefined && localStorage.getItem('dashboardSignUpData') != "undefined" && localStorage.getItem('dashboardSignUpData') != "" && localStorage.getItem('dashboardSignUpData') != null) {
        let existingOb = JSON.parse(localStorage.getItem('dashboardSignUpData'));
        let emailExist = false, usernameExist = false;
        existingOb.forEach(function (record, index) {
          if (record.userName == signUpArr.userName) {
            usernameExist = true;
          } else if (record.email == signUpArr.email) {
            emailExist = true;
          }
        });
        if (emailExist) {
          this.openSnackBar("This email already exist");
          // this.snackBar.open("This email already exist");
          return false;

        } else if (usernameExist) {
          this.openSnackBar("This username already exist");
          return false;

        } else {
          signUpArr.id = existingOb.length+1;
          existingOb.push(signUpArr);
          let jsonData: any = JSON.stringify(existingOb);
          localStorage.setItem('dashboardSignUpData', jsonData);
          localStorage.setItem("loginDetails", JSON.stringify(signUpArr));
          this.auth.sendToken( signUpArr.userName );            
          this.signUpForm.reset();
          this.router.navigate(['home']);
        }

      } else {
        loginObj.push(signUpArr);
        let jsonData: any = JSON.stringify(loginObj);
        localStorage.setItem('dashboardSignUpData', jsonData);
        this.signUpForm.reset();
        localStorage.setItem("loginDetails", JSON.stringify(signUpArr));
        this.auth.sendToken( signUpArr.userName );
        this.signUpForm.reset();
        this.router.navigate(['home']);
      }

    }    
    
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-comp">
  {{data}}
</span>`,
  styles: [`
    .example-comp {
      color: hotpink;
    }
  `],
})
export class SnackComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}