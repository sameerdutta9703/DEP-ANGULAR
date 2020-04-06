import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  updateUser$ = new Subject<boolean>();
  constructor() { }

  onUpdateUser(): void {
    this.updateUser$.next(true);
  }
  
}
