import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngClass]="type">{{label}}</button>`,
})
export class ButtonComponent {
  @Input() label = 'Click me';
  @Input() type = 'primary';
}
