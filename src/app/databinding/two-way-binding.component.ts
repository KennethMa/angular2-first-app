import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="number" [(ngModel)]="person.age">
  `,
  styles: []
})
export class TwoWayBindingComponent {

  person = {
    name: 'Billy',
    age: 23
  }

}
