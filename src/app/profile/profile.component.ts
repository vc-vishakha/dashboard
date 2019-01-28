import { Component, OnInit , Input } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '../dialogue.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // @Input() size: string | any;
  // @Input('master') masterName: string;  

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private dialogService:DialogService ) { }

  editForm: FormGroup;
  submitted = false; userProfileDetails = [];
  gblIndex : any; profileId : any;
 
  ngOnInit() {

    this.route.params.subscribe();

    this.editForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
    });   
    // this.setProfileDetails();
    let gblIndexData = this.setProfileDetails();
    this.gblIndex = gblIndexData.split('|')[0];
    this.profileId = gblIndexData.split('|')[1];
    console.log("gbl index :"+this.gblIndex);
    console.log("gbl profile id :"+this.profileId);
  }
   

  get f() { return this.editForm.controls; }
  
  setProfileDetails(){
    
    if( localStorage.getItem('loginDetails') != undefined && localStorage.getItem('loginDetails') != null )  {
      let dataIndex : any = ""; let profileId : any;
      this.userProfileDetails = JSON.parse(localStorage.getItem('loginDetails')); 
      let userData : any = this.userProfileDetails;
      
      this.editForm.setValue({
        emailId : userData.email,
        fullName: userData.fullName
      });
      let signUpData = JSON.parse(localStorage.getItem('dashboardSignUpData'));
      signUpData.forEach(function (record, index) {
          if (record.email == userData.email && record.fullName == userData.fullName ) {
            dataIndex = index;
            profileId = record.id;
            console.log("index : "+dataIndex);
            console.log("profile id : "+profileId);
          }
        });
        return dataIndex + '|' + profileId;
    }
  }
  

  saveProfile(){
    this.submitted = false;
    let formDataVal = this.editForm.value;

    if( this.editForm.valid ){
      this.submitted = true;
      let loginObj: any = [];

      let signUpArr = {
        fullName: formDataVal.fullName,
        email: formDataVal.emailId,
      };
      let localIndex = this.gblIndex;
        let existingOb = JSON.parse(localStorage.getItem('dashboardSignUpData'));
        let emailExist = false;
        existingOb.forEach(function (record, index) {
          if( localIndex != index ){
              if (record.email == signUpArr.email) {
                emailExist = true;
              }
          }
          
        });
        if (emailExist) {
          // this.openSnackBar("This email already exist");
          alert("This email already exist");
          return false;

        } else {
          existingOb[localIndex].fullName = signUpArr.fullName;
          existingOb[localIndex].email = signUpArr.email;
          let jsonData: any = JSON.stringify(existingOb);
          localStorage.setItem('dashboardSignUpData', jsonData);
          localStorage.setItem("loginDetails", JSON.stringify(existingOb[localIndex]));
          localStorage.setItem("LoggedInUser", existingOb[localIndex].userName );                 
          // this.router.navigate(['home']);
          this.route.params.subscribe(() => 
            this.router.navigate(['home'], { relativeTo: this.route })
          )
          this.editForm.reset();
        }

     }
    }
    
    goBack(){
      this.router.navigate(['home']);
    }
}
