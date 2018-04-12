import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Logger } from './logger/logger.service';
import { NewLogger } from './logger/newLogger.service';
import { OtherLogger } from './logger/otherLogger.service';
import { AppComponent } from './app.component';

@NgModule( {
    declarations: [ AppComponent ],
    imports: [ BrowserModule ],
    providers: [
        // NewLogger,
        Logger,
        OtherLogger,
        // {
        //     provide: Logger,
        //     useClass: NewLogger
        // },
        // {
        //     provide: OtherLogger,
        //     useClass: NewLogger
        // }
    ],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
