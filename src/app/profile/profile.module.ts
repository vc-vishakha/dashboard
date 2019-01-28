import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EditCanDeactivateGuard } from '../deactivate.service';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [EditCanDeactivateGuard]
})
export class ProfileModule { }
