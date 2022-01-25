import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthCredential,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBs2UkbgSQ8viIL3bEIGzf1zIqjFr1GTKQ',
  authDomain: 'comidaya-37af5.firebaseapp.com',
  databaseURL: 'https://comidaya-37af5-default-rtdb.firebaseio.com',
  projectId: 'comidaya-37af5',
  storageBucket: 'comidaya-37af5.appspot.com',
  messagingSenderId: '190571544120',
  appId: '1:190571544120:web:58a038b0492cf5ecbab0cd',
  measurementId: 'G-MFQPF43WNX',
};

const app = initializeApp(firebaseConfig);
@Injectable({
  providedIn: 'root',
})
export default class FirebaseAuth {
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
  token: string | undefined = undefined;
  user: User | null = null;
  credential: OAuthCredential | null = null;
  signIn(): void {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        this.credential = GoogleAuthProvider?.credentialFromResult(result);
        this.token = this.credential?.accessToken;
        this.user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
