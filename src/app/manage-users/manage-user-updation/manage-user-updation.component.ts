import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { UsersService } from 'src/app/shared/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-user-updation',
  templateUrl: './manage-user-updation.component.html',
  styleUrls: ['./manage-user-updation.component.css']
})
export class ManageUserUpdationComponent implements OnInit {

  currentUser: Observable<User>;
  userId: string;
  
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (param) => {
        this.userId = param['id'];
        this.currentUser=this.usersService.getUserDetails(this.userId);
      }
    );
  }

  updateUser(mainForm) {
    this.usersService.updateUser({
      id:this.userId,
      ...mainForm.value      
    }
       ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        mainForm.reset();
        this.router.navigate(['manage-users/']);
      }
    );
  }

}