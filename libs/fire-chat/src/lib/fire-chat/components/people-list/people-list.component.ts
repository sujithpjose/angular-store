import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css',
})
export class PeopleListComponent implements OnInit {
  chats$: Observable<any> | undefined;
  @Output() chatSelected: EventEmitter<string> = new EventEmitter<string>();
  chatService = inject(ChatService);

  ngOnInit(): void {
    debugger
    const loggedInUserId = sessionStorage.getItem('userName') as string;
    this.chats$ = this.chatService.getChats('sujith');
  }

  async onNewChat(userId: string) {
    const loggedInUserId = sessionStorage.getItem('userName') as string;
    await this.chatService.createChat([loggedInUserId, userId]);
    console.info('chat created', userId);
  }

  onSelect(chatId: any) {
    this.chatSelected.emit(chatId);
    console.info('chat selected', chatId);
  }
}
