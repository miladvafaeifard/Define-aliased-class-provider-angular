import { Injectable } from "@angular/core";

@Injectable()
export class OtherLogger {
    constructor() {
    }

    log( msg: string ) {
        console.log( `Other Logger: ${msg}` );
    }
}
