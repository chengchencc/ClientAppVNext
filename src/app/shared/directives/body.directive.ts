import { Directive } from '@angular/core';

@Directive({
  selector: 'body',
  host:{"[style.background-color]":'red'}
})
export class BodyDirective {

  constructor() { }
  bodyBackgroundImage() {
    return 'url("/assets/images/demo/camera1.jpg")';
  }
}
