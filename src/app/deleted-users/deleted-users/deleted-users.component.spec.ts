import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedUsersComponent } from './deleted-users.component';
import { of } from 'rxjs';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeletedUsersComponent', () => {
  let component: DeletedUsersComponent;
  let fixture: ComponentFixture<DeletedUsersComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['changeStatus', 'getDeletedUsers']);
  const getQuoteSpy = userServiceSpy.changeStatus.and.returnValue(of([{}]));

  let usersService: UsersService;
  let mockUser: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedUsersComponent ],
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
    fixture = TestBed.createComponent(DeletedUsersComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadDeletedUsers on ngOnInit', () => {
    spyOn(component, 'loadDeletedUsers');
    component.ngOnInit();
    expect(component.loadDeletedUsers).toHaveBeenCalled();
  })

  it('should call getDeletedUsers method from service on loadDeletedUsers', () => {
    component.loadDeletedUsers();
    expect(usersService.getDeletedUsers).toHaveBeenCalled();
  })

  it('should call changeStatus methord on activateUser', () => {
    component.activateUser(mockUser);
    expect(usersService.changeStatus).toHaveBeenCalledWith(mockUser);
  })

  it('should call loadDeletedUsers on activateUser', () => {
    spyOn(component, 'loadDeletedUsers');
    component.activateUser(mockUser);
    expect(component.loadDeletedUsers).toHaveBeenCalled()
  })


});
