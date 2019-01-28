import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent , SnackComponent} from './login.component';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoginComponent,SnackComponent],
  entryComponents: [SnackComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [AuthService],
})
export class LoginModule { }
