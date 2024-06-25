import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';

@Component({
  selector: 'lib-fire-chat',
  standalone: true,
  imports: [CommonModule, LoginComponent, MessageBoardComponent],
  templateUrl: './fire-chat.component.html',
  styleUrl: './fire-chat.component.css',
})
export class FireChatComponent { }
