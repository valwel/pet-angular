import { Component } from '@angular/core';
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent extends ChatService {

}
