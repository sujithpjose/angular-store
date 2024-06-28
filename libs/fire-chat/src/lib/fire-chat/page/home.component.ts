import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from '../components/people-list/people-list.component';
import { MessageBoardComponent } from '../components/message-board/message-board.component';
import { LoginComponent } from '../components/login/login.component';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    PeopleListComponent,
    MessageBoardComponent,
    LoginComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  chatId: string | undefined;
}
