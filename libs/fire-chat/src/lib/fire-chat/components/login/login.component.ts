import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  userName = '';
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName') ?? '';
  }
  onLogin() {
    console.log('clicked login', this.userName);
    sessionStorage.setItem('userName', this.userName);
  }
}
