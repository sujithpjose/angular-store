import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {  HomeComponent } from '@angular-monorepo/fire-chat';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chat';
}
