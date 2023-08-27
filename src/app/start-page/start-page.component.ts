import { Component } from '@angular/core';
import { User, UserAction } from '../shared/users.interface';
import { ToasterService } from '../services/toaster.service'

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  userAction: UserAction;
  isFormVisible: boolean;
  updatedUsers: User[];

  constructor(private toaster: ToasterService) {}

  onCreate(event: UserAction) {
    this.userAction = event;
    this.isFormVisible = true;
  }

  onView(event: UserAction) {
    this.userAction = event;
    this.isFormVisible = true;
  }

  toggleFormView(event: boolean) {
    this.isFormVisible = event;
  }

  updateUsersList(event: User[]) {
    this.updatedUsers = event;
  }

  showToaster(toastEvent: boolean) {
    toastEvent ? this.toaster.show('success', 'Well done!') : this.toaster.show('error', 'Something is wrong!');
  }

}
