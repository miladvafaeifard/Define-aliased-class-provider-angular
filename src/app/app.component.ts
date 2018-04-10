import { Component } from '@angular/core';
import { Logger } from './logger/logger.service';
import { OtherLogger } from './logger/otherLogger.service';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
    title = 'Hello App';

    constructor( private logger: Logger, private otherLogger: OtherLogger ) {
        this.logger.log( 'App component' );
        this.otherLogger.log( 'App component' );
    }
}
