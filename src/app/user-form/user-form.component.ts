import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserAction } from '../shared/users.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() currentUserAction: UserAction;
  @Input() isFormVisisble: boolean;
  @Output() onChangeVisisbility = new EventEmitter<boolean>()

  onClose() {
    this.isFormVisisble = false;
    this.onChangeVisisbility.emit(this.isFormVisisble)
  }
}
