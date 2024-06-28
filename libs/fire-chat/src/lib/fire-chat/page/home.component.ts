import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from '../components/people-list/people-list.component';
import { MessageBoardComponent } from '../components/message-board/message-board.component';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, PeopleListComponent, MessageBoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
