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

  @Output() changeStatus: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {

  }

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
