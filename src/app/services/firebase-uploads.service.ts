import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

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
export class FirebaseStorage {
  storage = getStorage(app);
  uploadImage(image: Blob, imageName: string): void {
    const imageRef = ref(this.storage, 'images/' + imageName);

    console.log(imageRef);
    uploadBytes(imageRef, image).then((snapshot) => {
      console.log(snapshot);
    });
  }
}
