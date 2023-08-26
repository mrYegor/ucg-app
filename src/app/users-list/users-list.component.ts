import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserAction } from '../shared/users.interface';
import { Actions } from './../shared/action.enums'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() tableHeader: string[];
  @Output() onCreateUser = new EventEmitter<UserAction>();
  @Output() onViewUserData = new EventEmitter<UserAction>();

  ngOnInit() {}

  titles = [
    'username',
    'first name',
    'last name',
    'email',
    'type'
  ]
  
  users = [
    {
      username: 'username',
      first_name: 'first_name',
      last_name: 'last_name',
      email: 'email',
      password: 'password',
      user_type: 'Admin'
    },
    {
      username: 'username1',
      first_name: 'first_name',
      last_name: 'last_name',
      email: 'email',
      password: 'password',
      user_type: 'Admin'
    },
    {
      username: 'username2',
      first_name: 'first_name',
      last_name: 'last_name',
      email: 'email',
      password: 'password',
      user_type: 'Admin'
    }
  ]

  createUser() {
    this.onCreateUser.emit(
      {
        user: {}, 
        action: Actions.create_user
      }
    );
  }

  viewUserData(user: User) {
    this.onViewUserData.emit(
      {
        user: user, 
        action: Actions.view_user
      }
    );
  }
}
