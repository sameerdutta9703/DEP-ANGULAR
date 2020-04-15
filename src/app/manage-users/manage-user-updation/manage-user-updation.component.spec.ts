import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserUpdationComponent } from './manage-user-updation.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageUserUpdationComponent', () => {
  let component: ManageUserUpdationComponent;
  let fixture: ComponentFixture<ManageUserUpdationComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['updateUser', 'getUserDetails']);
  const getQuoteSpy = userServiceSpy.updateUser.and.returnValue(of([{}]));

  let router: Router;
  let usersService: UsersService;
  let mockUser: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserUpdationComponent ],
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
    fixture = TestBed.createComponent(ManageUserUpdationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUserDetails on ngOnInit', () => {
    component.ngOnInit();
    expect(usersService.getUserDetails).toHaveBeenCalled();
  })

  it('should update exsisting user by calling the updateUser methord from UsersService', () => {
    component.updateUser(mockUser);
    expect(usersService.updateUser).toHaveBeenCalled();
  })

  it('should call the navigate methord for manage-users component', () => {
    spyOn(router, 'navigate');
    component.updateUser(mockUser);
    expect(router.navigate).toHaveBeenCalledWith(['/manage-users']);
  });

});
