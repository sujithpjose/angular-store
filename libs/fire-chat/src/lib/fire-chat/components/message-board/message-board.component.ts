import { Component, OnInit, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'lib-message-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-board.component.html',
  styleUrl: './message-board.component.css',
})
export class MessageBoardComponent {
  chatId = input<string>();
  messages$: Observable<any> | undefined;
  userMessage = '';
  private chatService = inject(ChatService);

  constructor() {
    effect(() => {
      if (this.chatId()) {
        this.messages$ = this.chatService.getMessages(this.chatId() as string);
      }
    });
  }

  async onSubmit() {
    await this.chatService.sendMessage(
      this.chatId() as string,
      this.userMessage,
      (sessionStorage.getItem('userName') as string)
    );
    console.log('message submitted', this.userMessage);
    this.userMessage = '';
  }
}
