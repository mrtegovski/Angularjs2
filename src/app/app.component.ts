import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h2 {
    color: red;
  }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app works! YOYO';
  subtitle= 'Riste Tegovski';
}
