import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <!--<app-databinding></app-databinding>-->

    <app-lifecycle *ngIf="delete" [bindable]="boundValue">
      <p>{{test}}</p>
      <p>{{boundValue}}</p>
    </app-lifecycle>
    <button (click)="delete=!delete">Click to toggle</button>
    <button (click)="test='Changed Value'">Click to Change</button>
    <button (click)="boundValue = 11111">Click to Change Bound</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delete = true
  test = 'starting value'
  boundValue = 1000
}
