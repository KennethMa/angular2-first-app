import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngOnInit() {
    this.log('ngOnInit')

  }

  ngDoCheck() {
    this.log('ngDoCheck')

  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')

  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')

  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')

  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')

  }

  ngOnDestroy() {
    this.log('ngOnDestroy')

  }

  private log: (life: string) => void = life => console.log(life)

}
