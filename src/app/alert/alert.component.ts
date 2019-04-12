import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div>This is a demo for angular custom element. {{message}}</div>',
  styles: [`
    div {
      background: salmon;
      border: 1px solid black;
      padding: 10px;
      font-family: sans-serif;
    }
  `]

})
export class AlertComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
