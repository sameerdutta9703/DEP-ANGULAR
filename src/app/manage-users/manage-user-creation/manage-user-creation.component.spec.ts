import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUserCreationComponent } from './manage-user-creation.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageUserCreationComponent', () => {
  let component: ManageUserCreationComponent;
  let fixture: ComponentFixture<ManageUserCreationComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['createUser']);
  const getQuoteSpy = userServiceSpy.createUser.and.returnValue(of([{}]));

  let router: Router;
  let usersService: UsersService;
  let mockUser: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserCreationComponent ],
      providers: [
        {
          provide: UsersService, useValue: userServiceSpy
        }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserCreationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new user by calling the createUser methord from UsersService', () => {
    component.createNewUser(mockUser);
    expect(usersService.createUser).toHaveBeenCalled();
  })

  it('should call the navigate methord for manage-users component', () => {
    spyOn(router, 'navigate');
    component.createNewUser(mockUser);
    expect(router.navigate).toHaveBeenCalledWith(['/manage-users']);
  });

});
