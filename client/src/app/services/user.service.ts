import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  street?: string;
  city?: string;
  state?: string;
  jobTitle?: string;
  phone?: string;
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(tap(console.log));
  }
}
