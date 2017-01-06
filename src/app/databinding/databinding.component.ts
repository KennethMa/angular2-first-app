import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = 'This is stringInterpolation'

  onTest() {
    return true
  }
  onClicked(evt: string) {
    alert(evt)
  }
}
