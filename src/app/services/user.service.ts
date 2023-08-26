import { Injectable } from '@angular/core';
import { User } from '../shared/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly title = 'users';

  constructor() { }

  //set dummy data

  public addDummyUsers() {
    const users = [
      {
        username: '__jn__',
        first_name: 'John',
        last_name: 'Johnson',
        email: 'john@test.com',
        password: '123',
        user_type: 'Admin'
      },
      {
        username: '__bl__',
        first_name: 'Bill',
        last_name: 'Billson',
        email: 'bill@test.com',
        password: '456',
        user_type: 'Driver'
      },
      {
        username: '__sm__',
        first_name: 'Sam',
        last_name: 'Samson',
        email: 'sam@test.com',
        password: '789',
        user_type: 'Admin'
      }
    ];

    localStorage.setItem(this.title, JSON.stringify(users));
  }

  public getUsers(): User[] {
    const users = localStorage.getItem('users');
    return JSON.parse(users!);
  }

  //create-update

  public createUpdateUser(newUser: User): void {
    const users = JSON.parse(localStorage.getItem('users')!);
    users.push(newUser);
    localStorage.setItem(this.title, JSON.stringify(users));
  }
}
