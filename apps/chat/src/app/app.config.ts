import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEAOPHcbLcLF6kD4H_RUoW1JmqWV87dkI",
  authDomain: "angular-chat-cef3d.firebaseapp.com",
  projectId: "angular-chat-cef3d",
  storageBucket: "angular-chat-cef3d.appspot.com",
  messagingSenderId: "618389631654",
  appId: "1:618389631654:web:95bcdf1d35cb042e3b3a67"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
