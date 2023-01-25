import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: Subject<Array<Message>> = new Subject()
  constructor() {
    this.messages.next([{msg:'halo'}]);
    console.log('22')
   }

  public getMessages(): Observable<Array<Message>> {
    const mess = of([{msg:'halo1'}]);

    
    return mess
  }
  
}
