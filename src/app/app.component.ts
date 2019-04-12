import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert/alert.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularElement';
  content: any = null;
  
  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const alertElement = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', alertElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="--Rendered Dynamically"></my-alert>');
    }, 2000)
  }

}
