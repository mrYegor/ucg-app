import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Toast } from '../../shared/toast.interface';

@Component({
  selector: 'app-toaster',
  template: `
    <div class="toast toast-{{toast!.type}}" 
      [style.bottom.px]="i*100">
      <h4>{{toast!.title}}</h4>
      <a class="close" (click)="remove.emit(i)">&times;</a>
    </div>
  `,
  styleUrls: ['./toast.component.scss']
})
export class ToasterComponent {
  @Input() toast: Toast | null;
  @Input() i: number;

  @Output() remove = new EventEmitter<number>();
}