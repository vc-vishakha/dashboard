import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent , SnackComponent } from './sign-up.component';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [SignUpComponent,SnackComponent],
  entryComponents: [SnackComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
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
export class SignUpModule { }
