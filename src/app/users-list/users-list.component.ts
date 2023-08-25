import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
@Input() tableHeader: string[];

  ngOnInit() {}

  titles = [
    'username',
    'first_name',
    'last_name',
    'email',
    'Admin'
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
}
