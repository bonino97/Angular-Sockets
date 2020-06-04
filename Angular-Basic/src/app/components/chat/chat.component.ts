import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  text = '';
  subscription: Subscription;
  messages: any[] = [];
  element: HTMLElement;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {

    this.element = document.getElementById('chat-mensajes');

    this.subscription = this.chatService.getMessages().subscribe( msg => {
      this.messages.push(msg);

      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);

    });
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }

  send(){

    if(this.text.trim().length === 0){
      return;
    }

    this.chatService.sendMessage(this.text);
    this.text = '';
    
  }

}
