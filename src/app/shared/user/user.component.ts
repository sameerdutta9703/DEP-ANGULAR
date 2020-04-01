import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Input() showDetails: boolean;
  @Output() ButtonClickedEvent = new EventEmitter;
  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
   
  }

  onClickButton(...args) {
    if (args.length === 1) {
      this.router.navigate(['manage-users', args[0]]);
    }
    else if (this.user.isDeleted) {
      this.user.isDeleted = false;
    }
    else if(!this.user.isDeleted) {
      this.user.isDeleted = true;
    }
  }

}
