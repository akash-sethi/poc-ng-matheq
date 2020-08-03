import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mathJaxObject;
  @Input() content = `The standard form of quadratic equation looks like $ ax^2 + bx + c = 0 $ When $ a \\ne 0 $, there are two solutions to $ ax^2 + bx + c = 0 $ and they are $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`;

  constructor(@Inject('Window') private window: Window) {
  }

  ngOnInit(): void {
    this.loadMathConfig();
    this.renderMath();
  }

  updateMathObt(): void {
    this.mathJaxObject = this.window['MathJax'];
  }

  renderMath(): void {
    this.updateMathObt();
    const angObj = this;
    setTimeout(() => {
      angObj.mathJaxObject.Hub.Queue(['Typeset', angObj.mathJaxObject.Hub], 'mathContent');
    }, 1000);
  }

  loadMathConfig(): void {
    this.updateMathObt();
    this.mathJaxObject.Hub.Config({
      showMathMenu: true,
      tex2jax: {inlineMath: [['$', '$']], displayMath: [['$$', '$$']]},
      menuSettings: {zoom: 'Double-Click', zscale: '150%'},
      CommonHTML: {linebreaks: {automatic: true}},
      'HTML-CSS': {linebreaks: {automatic: true}},
      SVG: {linebreaks: {automatic: true}}
    });
  }

}
