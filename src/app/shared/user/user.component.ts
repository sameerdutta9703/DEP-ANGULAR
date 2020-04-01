import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Input() showDetails;
  @Output() changeStatus: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  modifyStatus(id: string): void {
    this.changeStatus.emit(id);
  }

}
