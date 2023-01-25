import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagesService } from '../messages.service'

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  public messages: Array<Message>
  constructor(public messagesService: MessagesService) {}
  ngOnInit(): void {
    console.log('111')
    this.messagesService.getMessages().subscribe((list) => {
      this.messages = list
      console.log(list)
    })
  }
}
