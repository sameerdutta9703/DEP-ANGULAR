import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AllUsersComponent } from './all-users.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from 'src/app/shared/users.model';
import { usersList } from 'src/app/shared/users.mock';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getAllUsers']);
  const getQuoteSpy = userServiceSpy.getAllUsers.and.returnValue(of([{}]));

  let router: Router;
  let usersService: UsersService;
  let mockUser: User = usersList[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUsersComponent ],
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
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadAllUsers on ngOnInit', () => {
    spyOn(component, 'loadAllUsers');
    component.ngOnInit();
    expect(component.loadAllUsers).toHaveBeenCalled();
  })

  it('should call getAllUsers method from service on loadAllUsers', () => {
    component.loadAllUsers();
    expect(usersService.getAllUsers).toHaveBeenCalled();
  })

  it('should call the navigate methord for create component', () =>{
    spyOn(router, 'navigate');
    component.createUser();
    expect(router.navigate).toHaveBeenCalledWith(['manage-users/create']);
  });

  it('should call the navigate methord for edit component', () =>{
    spyOn(router, 'navigate');
    component.editUserDetails(mockUser);
    expect(router.navigate).toHaveBeenCalledWith(['manage-users/edit', mockUser.id]);
  });

  it('should call the navigate methord for details component', () =>{
    spyOn(router, 'navigate');
    component.showUserDetails(mockUser);
    expect(router.navigate).toHaveBeenCalledWith(['manage-users/details', mockUser.id]);
  });
  
});
