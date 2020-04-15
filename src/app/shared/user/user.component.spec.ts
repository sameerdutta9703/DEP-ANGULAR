import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { User } from '../users.model';
import { usersList } from '../users.mock';

xdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let mockUser: User = { id: '1', firstName: 'User', lastName: 'One', age: 25, login:'User1', password:'1234', isDeleted: true};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
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
