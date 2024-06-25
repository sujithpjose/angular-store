import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FireChatComponent } from '@angular-monorepo/fire-chat';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FireChatComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chat';
}
