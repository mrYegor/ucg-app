import { Component, Input, OnInit } from '@angular/core';
import { ToasterService } from '../services/toaster.service';
import { Toast } from '../shared/toast.interface';

@Component({
  selector: 'app-toaster-container',
  template: `
    <app-toaster *ngFor="let toast of toasts; let i=index" 
      [toast]="toast" [i]="i"
      (remove)="remove($event)"></app-toaster>
  `,
  styles: []
})
export class ToasterContainerComponent implements OnInit {

  toasts: (Toast | null)[] = [];

  constructor(public toaster: ToasterService) {}

  ngOnInit() {
    this.toaster.toast$
      .subscribe(toast => {
        this.toasts = [toast, ...this.toasts];
        setTimeout(() => this.toasts.pop(), toast!.delay || 6000);
      });
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((v, i) => i !== index);
    //this.toasts.splice(index, 1);
  }
}