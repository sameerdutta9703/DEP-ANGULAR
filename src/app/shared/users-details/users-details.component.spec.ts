import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersDetailsComponent } from './users-details.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../users.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersDetailsComponent', () => {
  let component: UsersDetailsComponent;
  let fixture: ComponentFixture<UsersDetailsComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUserDetails']);
  const getQuoteSpy = userServiceSpy.getUserDetails.and.returnValue(of([{}]));

  let usersService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailsComponent ],
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
    fixture = TestBed.createComponent(UsersDetailsComponent);
    component = fixture.componentInstance;
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

});
