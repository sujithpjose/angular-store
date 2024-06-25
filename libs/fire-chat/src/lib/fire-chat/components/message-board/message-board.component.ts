import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-message-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-board.component.html',
  styleUrl: './message-board.component.css',
})
export class MessageBoardComponent implements OnInit {
  item$: Observable<any> | undefined;
  userMessage = '';
  private firestore: Firestore = inject(Firestore);

  ngOnInit(): void {
    const itemCollection = collection(this.firestore, 'messages');
    this.item$ = collectionData<any>(itemCollection);
  }

  async onSubmit() {
    console.log('message submitted', this.userMessage);
    if (this.userMessage.trim() === '') {
      alert("Enter valid message");
      return;
    }
    const docRef = await addDoc(collection(this.firestore, 'messages'), {
      text: this.userMessage,
      name: sessionStorage.getItem('userName'),
      createdAt: serverTimestamp(),
      uid: sessionStorage.getItem('userName')
    });
    console.log("Document written with ID: ", docRef.id);
    this.userMessage = '';
  }
}
