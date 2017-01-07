import { Component, ViewChild, ContentChild, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      <ng-content></ng-content>
      <span #boundParagraph>{{bindable}}</span>
      <span>{{boundParagraph.textContent}}</span>
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  bindable = 1000

  @ViewChild('boundParagraph')
  boundParagraph: HTMLElement

  @ContentChild('boundContent')
  boundContent: HTMLElement

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
    console.log(this.boundContent)
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')

  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
    console.log(this.boundParagraph)
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')

  }

  ngOnDestroy() {
    this.log('ngOnDestroy')

  }

  private log: (life: string) => void = life => console.log(life)

}
