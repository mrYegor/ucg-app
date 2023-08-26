import { Component, Input } from '@angular/core';
import { UserAction } from '../shared/users.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() currentUserAction: UserAction;
}
