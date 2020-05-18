import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyCp9yNlLtJVtI8DTQW86gLQa045poqSuJQ",
  authDomain: "bnbseguro.firebaseapp.com",
  databaseURL: "https://bnbseguro.firebaseio.com",
  projectId: "bnbseguro",
  storageBucket: "bnbseguro.appspot.com",
  messagingSenderId: "671226044119",
  appId: "1:671226044119:web:b592db1c2947b35ea65a92",
  measurementId: "G-CD5SHM75Q8"
});

export const db = app.database();
export const productosRef = db.ref('Productos');

export const errorMessages = {
  'auth/wrong-password': 'Contraseña incorrecta',
  'auth/invalid-email': 'Formato de correo incorrecto',
  'auth/email-already-in-use': 'Correo ya en uso',
  'auth/network-request-failed': 'No estas conectado a la red',
};
