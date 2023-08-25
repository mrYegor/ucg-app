import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({});
  }

  
}
