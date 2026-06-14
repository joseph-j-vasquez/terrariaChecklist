import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDZFDpM4ybiVdyNQZpQXdMe-NHEgQ4tnTw',
  authDomain: 'terrariachecklist-fd998.firebaseapp.com',
  databaseURL: 'https://terrariachecklist-fd998-default-rtdb.firebaseio.com',
  projectId: 'terrariachecklist-fd998',
  storageBucket: 'terrariachecklist-fd998.firebasestorage.app',
  messagingSenderId: '692737959113',
  appId: '1:692737959113:web:e214b6bd5cbd32cb6b1918',
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
