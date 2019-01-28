import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DialogService } from './dialogue.service';

@Injectable()
export class EditCanDeactivateGuard implements CanDeactivate<ProfileComponent> {
  
  constructor(private dialogService: DialogService) { }

  canDeactivate(
    component: ProfileComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    
      let url: string = state.url;
      console.log('Url: '+ url);

      if ( (!component.submitted) && (component.editForm.touched || component.editForm.dirty) ) {
        component.submitted = false;
        return this.dialogService.confirm('Discard changes for profile?');
      }else{
        return true;
      }
      
  }
} 