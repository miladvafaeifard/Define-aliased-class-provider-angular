import { Injectable } from "@angular/core";

@Injectable()
export class NewLogger {
  private data: string;
  constructor() {
    console.log("new logger is created");
  }

  log(msg: string) {
    console.log(`New Logger: ${msg}`);
    this.data = msg;
  }

  getMessage() {
    return this.data;
  }
}
