import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyDknpHo4ahNzVlqb5GWOWFI7Xkr3GEVAXc",
  authDomain: "biltandbac.firebaseapp.com",
  databaseURL: "https://biltandbac.firebaseio.com",
  projectId: "biltandbac",
  storageBucket: "biltandbac.appspot.com",
  messagingSenderId: "971941922255",
  appId: "1:971941922255:web:fd2d884418da8da5e63eba",
  measurementId: "G-ZD8DYTVMJS"
});

export const db = app.database();
export const productosRef = db.ref('Productos');

export const errorMessages = {
  'auth/wrong-password': 'Contraseña incorrecta',
  'auth/invalid-email': 'Formato de correo incorrecto',
  'auth/email-already-in-use': 'Correo ya en uso',
  'auth/network-request-failed': 'No estas conectado a la red',
};
