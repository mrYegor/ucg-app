import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions } from '../shared/action.enums';
import { User, UserAction } from '../shared/users.interface';
import { PasswordValidator } from './../shared/password-validator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() currentUserAction: UserAction;
  @Input() isFormVisible: boolean;
  @Output() onChangeVisisbility = new EventEmitter<boolean>();
  @Output() onUsersUpdate = new EventEmitter<User[]>();
  @Output() showToast = new EventEmitter<boolean>();

  form: FormGroup;
  actions = Actions;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      user_type: [
        '',
        [
          Validators.required
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('([A-Za-z0-9@_]{1,}){8,}')
        ]
      ],
      repeat_password: [
        '',
        [
          Validators.required,
          PasswordValidator('password'),
        ]
      ]
    });
  }

  ngOnInit() {
    this.getUserData();
  }

  ngOnChanges() {
    this.getUserData();
  }

  submit() {
    this.userService
      .newUserValue(
        this.form,
        this.currentUserAction.action,
        this.currentUserAction.user.email
      );

    this.onUsersUpdate.emit(
      JSON.parse(localStorage.getItem('users')!)
    );

    this.showToast.emit(true);

    this.onClose();
  }

  toggleFormView(event: boolean) {
    this.isFormVisible = event;
  }

  onClose() {
    this.isFormVisible = false;
    this.onChangeVisisbility.emit(this.isFormVisible)
  }

  getUserData() {
    this.userService
        .getUserByEmail(
          this.currentUserAction,
          this.form,
        )
  }

  deleteUser() {
    this.userService
      .deleteCurrentUser(this.currentUserAction.user.email!);

    this.onUsersUpdate.emit(
      JSON.parse(localStorage.getItem('users')!)
    );

    this.showToast.emit(true);

    this.onClose();
  }
}
