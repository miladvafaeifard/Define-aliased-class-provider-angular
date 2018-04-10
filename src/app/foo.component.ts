import { Component } from '@angular/core';
import { NewLogger } from './logger/newLogger.service';

@Component( {
    selector: 'foo',
    template: '<h1> Hello </h1>'
} )
export class FooComponent {
    title = 'CodeSandbox';

    constructor( private newLogger: NewLogger ) {
        this.newLogger.log( 'foo hello' );
    }
}
