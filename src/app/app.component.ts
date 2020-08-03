import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  equations = ['\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)', '\\sum_{i=1}^nx_i', 'c = \\pm\\sqrt{a^2 + b^2}'];
}
