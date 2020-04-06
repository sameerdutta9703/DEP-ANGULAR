import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() usersList: User[];
  @Input() showDetails: boolean;

  @Output() changeStatus: EventEmitter<User> = new EventEmitter();
  @Output() detailsChange: EventEmitter<User> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    
  }

  modifyStatus(userData: User): void {
    this.changeStatus.emit(userData);
  }

  editUserDetails(userData: User): void {
    this.detailsChange.emit(userData);
  }
}
