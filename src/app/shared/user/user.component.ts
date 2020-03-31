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
  @Input() route: any;
  @Output() deactivateEvent = new EventEmitter;
  @Output() activateEvent = new EventEmitter;
  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    console.log(this.route);
  }

  showDetailsClicked(id){
    this.router.navigate(['Manage',id]);
  }
  deactivateButtonClicked(){
    console.log(this.user)
    this.user.isDeleted=true;
  }
  activateButtonClicked(){
    console.log(this.user)
    this.user.isDeleted=false;
  }

}
