import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserAction } from '../shared/users.interface';
import { Actions } from './../shared/action.enums';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Input() tableHeader: string[];
  @Input() updatedUsers: User[];
  @Output() onCreateUser = new EventEmitter<UserAction>();
  @Output() onViewUserData = new EventEmitter<UserAction>();

  ngOnInit() {
    this.userService.addDummyUsers();
    this.users = this.userService.getUsers()
  }

  ngOnChanges() {
    this.users = this.updatedUsers;
  }

  titles = [
    'username',
    'first name',
    'last name',
    'email',
    'type'
  ]
  
  users: User[];

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
