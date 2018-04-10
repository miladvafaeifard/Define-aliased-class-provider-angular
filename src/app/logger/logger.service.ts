import { Injectable } from "@angular/core";

@Injectable()
export class Logger {
    constructor() {
    }

    log( msg: string ) {
        console.log( `Logger: ${msg}` );
    }
}
