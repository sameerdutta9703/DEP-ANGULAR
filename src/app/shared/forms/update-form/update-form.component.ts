import { Component, OnInit } from '@angular/core';
import { User } from '../../users.model';
import { UsersService } from '../../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

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
