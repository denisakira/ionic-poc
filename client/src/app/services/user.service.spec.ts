import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use the http get method in the getUsers method', () => {
    const httpSpy = spyOn(HttpClient.prototype, 'get').and.callFake(() => of());
    
    service.getUsers();

    expect(httpSpy).toHaveBeenCalled();
  });

  it('should use the http post method in the createUser method', () => {
    const httpSpy = spyOn(HttpClient.prototype, 'post').and.callFake(() => of());
    
    service.createUser({});

    expect(httpSpy).toHaveBeenCalled();
  });
});
