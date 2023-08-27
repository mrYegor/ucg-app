import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User, UserAction } from '../shared/users.interface';
import { Actions } from '../shared/action.enums';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly title = 'users';

  constructor() { }

  //set dummy data
  public addDummyUsers(): void {
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
    const users = localStorage.getItem(this.title);
    return JSON.parse(users!);
  }

  public getUserByEmail(userAction: UserAction, form: any): void {
    const users = JSON.parse(localStorage.getItem(this.title)!);
    const email = userAction.user.email;
    const action = userAction.action;

    const selectedUser = users.find((u: User) => u.email === email);

    if (action === Actions.view_user) {
      form.patchValue({
        username: selectedUser.username,
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        email: selectedUser.email,
        password: selectedUser.password,
        repeat_password: selectedUser.repeat_password,
        user_type: selectedUser.user_type
      })
    } else if (action === Actions.create_user) {
      form.patchValue({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        repeat_password: '',
        user_type: ''
      })
    }

    
  }

  //create-update
  public newUserValue(
    form: FormGroup<any>, 
    action: string,
    currentEmail?: string
  ): void {
    const users = JSON.parse(localStorage.getItem(this.title)!);
    const updatedUserValue = form.value;
    delete updatedUserValue.repeat_password;

    if (action === Actions.create_user) {
      users.push(updatedUserValue);
    }
    
    if (action === Actions.view_user) {
      const i = users.findIndex((u: User) => u.email === currentEmail);
      Object.assign(users[i], updatedUserValue);
    }

    localStorage.setItem(this.title, JSON.stringify(users));
  }

  //delete user
  public deleteCurrentUser(email: string): void {
    const users = JSON.parse(localStorage.getItem(this.title)!);
    const i = users.findIndex((u: User) => u.email === email);
    users.splice(i, 1)
    localStorage.setItem(this.title, JSON.stringify(users));
  }
}
