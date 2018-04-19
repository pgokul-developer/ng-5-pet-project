import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private _messages: string[] = [];
  get messages(): string[] {
    return this._messages;
  }

  set messages(value: string[]) {
    this._messages = value;
  }

  constructor() { }

  getLastMessage() {
    return this.messages[this.messages.length - 1];
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
