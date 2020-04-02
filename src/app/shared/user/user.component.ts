import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() showDetails: boolean;
  @Output() changeStatus: EventEmitter<User> = new EventEmitter();
  @Output() detailsChange: EventEmitter<User> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
   
  }

  modifyStatus(userData: User): void {
    this.changeStatus.emit(userData);
  }

  editUserDetails(userData: User): void {
    this.detailsChange.emit(userData);
  }

}
