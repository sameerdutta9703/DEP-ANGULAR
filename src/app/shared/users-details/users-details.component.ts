import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users.model';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param) => {
        this.usersService.getUserDetails(param['id']).subscribe
          (user => this.user = user);
      }
    );
  }
}
