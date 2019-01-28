import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { EditCanDeactivateGuard } from './deactivate.service';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    loadChildren: './sign-up/sign-up.module#SignUpModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
  },
  {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerModule',
  },
  {
    path: 'customer:id',
    loadChildren: './customer/customer.module#CustomerModule',
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full',
  },
  {
    path: '**', redirectTo: 'dashboard', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
