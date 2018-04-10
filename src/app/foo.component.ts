import { Component } from '@angular/core';
import { NewLogger } from './logger/newLogger.service';

@Component({
  selector: 'foo',
  template: '<h1> Hello </h1>'
})
export class FooComponent {
  constructor(private newLogger: NewLogger) {
    this.newLogger.log('foo hello');
  }
  title = 'CodeSandbox';
}
