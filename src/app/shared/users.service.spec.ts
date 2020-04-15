import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { User } from './users.model';
import { usersList } from './users.mock';

describe('UsersService', () => {
  let httpClient: HttpClient;
  let httpTestingControler: HttpTestingController;

  let usersService: UsersService;
  let mockUser:User = usersList[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    usersService = TestBed.inject(UsersService);

    //Here http service is being injected
    httpClient = TestBed.inject(HttpClient);
    httpTestingControler = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  it('should get all the users', () => {
    usersService.getAllUsers().subscribe((data) => {
      expect(data).toEqual([]);
    });

    const req = httpTestingControler.expectOne('http://localhost:8080/users/');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    httpTestingControler.verify();
  });

  it('should get the active users', () => {
    usersService.getActiveUsers().subscribe((data) => {
      expect(data).toEqual([]);
    });
    const req = httpTestingControler.expectOne('http://localhost:8080/users/');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    httpTestingControler.verify();
  });

  it('should get the deleted users', () => {
    usersService.getDeletedUsers().subscribe((data) => {
      expect(data).toEqual([]);
    });
    const req = httpTestingControler.expectOne('http://localhost:8080/users/');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    httpTestingControler.verify();
  });

});
