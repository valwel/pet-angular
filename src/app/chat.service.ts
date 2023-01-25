import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Message[] = [
    {
      msg: 'hi'
    }
  ];

  constructor() { }

  addMessage(msg: any) {
    const message: Message = {
      msg: msg
    };
    this.messages.unshift(message);
  }
}
