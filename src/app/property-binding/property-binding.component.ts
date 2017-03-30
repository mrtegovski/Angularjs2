import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: [`.blueColor{
    color: blue;
  }`]
})
export class PropertyBindingComponent {

  testString = "test string";

  @Input() outsideInput: string;
}
