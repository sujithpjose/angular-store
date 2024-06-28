// src/app/services/chat.service.ts
import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  where,
  query,
} from '@angular/fire/firestore';
import { orderBy, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private firestore: Firestore = inject(Firestore);

  async createChat(
    participants: string[],
    type: 'individual' | 'group',
    groupName?: string
  ) {
    const docRef = await addDoc(collection(this.firestore, 'chats'), {
      type,
      participants,
      groupName: groupName || null,
      lastMessage: '',
      lastMessageTimestamp: serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
  }

  async sendMessage(chatId: string, message: string, senderId: string) {
    const timestamp = serverTimestamp();
    await addDoc(collection(this.firestore, `chats/${chatId}/messages`), {
      senderId,
      messageText: message,
      createdAt: timestamp,
    });
    const chatDocRef = doc(this.firestore, `chats/${chatId}`);
    await updateDoc(chatDocRef, {
      lastMessage: message,
      lastMessageTimestamp: timestamp,
    });
  }

  getMessages(chatId: string) {
    const msgCollection = collection(this.firestore, `chat/${chatId}/messages`);
    const queryString = query(msgCollection, orderBy('createdAt'));

    return collectionData(queryString);
  }

  getChats(userId: string) {
    const chatCollection = collection(this.firestore, 'chats');
    const queryString = query(
      chatCollection,
      where('participants', 'array-contains', userId)
    );

    return collectionData<any>(queryString);
  }
}
