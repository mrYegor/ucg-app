import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserAction } from '../shared/users.interface';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  userAction: UserAction;
  isFormVisible: boolean;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({});
  }

  onCreate(event: UserAction) {
    this.userAction = event;
    this.isFormVisible = true;
  }

  onView(event: UserAction) {
    this.userAction = event;
    this.isFormVisible = true;
  }
}
