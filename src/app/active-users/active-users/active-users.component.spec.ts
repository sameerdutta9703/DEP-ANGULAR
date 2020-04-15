import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveUsersComponent } from './active-users.component';
import { UsersService } from 'src/app/shared/users.service';
import { of } from 'rxjs';
import { User } from 'src/app/shared/users.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActiveUsersComponent', () => {
  let component: ActiveUsersComponent;
  let fixture: ComponentFixture<ActiveUsersComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['changeStatus', 'getActiveUsers']);
  const getQuoteSpy = userServiceSpy.changeStatus.and.returnValue(of([{}]));

  let usersService: UsersService;
  let mockUser: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveUsersComponent],
      providers: [
        {
          provide: UsersService, useValue: userServiceSpy
        }
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUsersComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadActiveUsers on ngOnInit', () => {
    spyOn(component, 'loadActiveUsers');
    component.ngOnInit();
    expect(component.loadActiveUsers).toHaveBeenCalled();
  })

  it('should call getActiveUsers method from service on loadActiveUsers', () => {
    component.loadActiveUsers();
    expect(usersService.getActiveUsers).toHaveBeenCalled();
  })

  it('should call changeStatus methord on deactivateUser', () => {
    component.deactivateUser(mockUser);
    expect(usersService.changeStatus).toHaveBeenCalledWith(mockUser);
  })

  it('should call loadActiveUsers on deactivateUser', () => {
    spyOn(component, 'loadActiveUsers');
    component.deactivateUser(mockUser);
    expect(component.loadActiveUsers).toHaveBeenCalled()
  })

});
