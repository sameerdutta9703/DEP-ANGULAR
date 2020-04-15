import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { User } from '../users.model';
import { usersList } from '../users.mock';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  let mockUser: User = usersList[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeStatus on modifyStatus', () => {
    spyOn(component.changeStatus, 'emit');
    component.modifyStatus(mockUser);
    expect(component.changeStatus.emit).toHaveBeenCalledWith(mockUser);
  });

  it('should call detailsChange on editUserDetails', () => {
    spyOn(component.detailsChange, 'emit');
    component.editUserDetails(mockUser);
    expect(component.detailsChange.emit).toHaveBeenCalledWith(mockUser);
  });


});
