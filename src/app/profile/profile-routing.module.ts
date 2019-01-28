import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { EditCanDeactivateGuard } from '../deactivate.service';

const routes: Routes = [
  {
    path : '',
    component : ProfileComponent,
    canDeactivate: [EditCanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
