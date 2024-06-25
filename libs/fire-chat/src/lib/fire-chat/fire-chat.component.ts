import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';

@Component({
  selector: 'lib-fire-chat',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './fire-chat.component.html',
  styleUrl: './fire-chat.component.css',
})
export class FireChatComponent { }
