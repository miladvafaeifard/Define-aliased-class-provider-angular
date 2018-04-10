import { Injectable } from "@angular/core";

@Injectable()
export class NewLogger {
    constructor() {
        // console.log("new logger is created");
    }

    log( msg: string ) {
        console.log( `New Logger: ${msg}` );
    }
}
