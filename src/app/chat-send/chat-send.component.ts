import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-chat-send',
  templateUrl: './chat-send.component.html',
  styleUrls: ['./chat-send.component.scss']
})
export class ChatSendComponent implements OnInit{

  mes = '';

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.chatService.addMessage(this.mes);
    // console.log(this.mes)
    this.mes = '';
    // console.log(this.chatService);
  }

}
