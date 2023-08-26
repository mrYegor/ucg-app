import { Component, Input } from '@angular/core';
import { Actions } from 'src/app/shared/action.enums';
import { UserAction } from '../../shared/users.interface';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {
  @Input() currentAction: UserAction;
  actions = Actions;
}
