# Bilt&Bac Documentación
### Zuperzum 2020

Acontinuación se encuentra la documentación de la 
página web de Bilt & Bac

Tecnologias Usadas
============
Como parte de la arquitectura del software se utilizó Firebase, en especifico Firebase Functions, Realtime Database, y Hosting
Todo el código que tiene que ver con el Front, se encuentra en la carpeta "public", y todo lo que tiene que ver con 
Funciones (Firebase functions), se encuentra el la carpeta "functions"

Como parte del frontend de Bilt&Bac se utilizó el framework 
[Vue.js](https://vuejs.org/)

Para el Backend se utilizó [Firebase Functions](https://firebase.google.com/docs/functions) y Node.js, además de Firebase [Realtime Database](https://firebase.google.com/docs/database) para la báse de datos.


Consideraciones:
==========
Antes de hacer los pasos siguientes, el desarrollador tuvo que haber tenido acceso a la consola de firebase con una cuenta asignada
al proyecto

Para Vue.js, se utilizó la capa [Vuetify](https://vuetifyjs.com/)

Para el envío de correos electrónicos, se utilizó [Nodemailer](https://nodemailer.com/usage/using-gmail/), el código asignado a esta acción se encuentra en functions/index.js

**El dominio se encuentra direccionado a firebase hosting**

Ejecución a Producción/local
==========
Hay dos formas de ejecutar el código.
1. Despliegue local:
Desde la terminal, situandose en la carpeta "public", escribir el siguiente comando:
```javascript
yan serve
```
2. Despliegue en Producción:
Desde la terminal, situandose en la carpeta "public", escribir los siguientes comandos:
Para compilar el código de Vue.js (el código de Vue se encuentra en public/src)
```javascript
yan build
```
Una vez procesado está listo para subirlo a producción a firebase:
(el código procesado de Vue se encuentra en public/dist)
```javascript
firebase deploy --only hosting
```

Despliegue de funcciones de firebase
==========
El código ejecutable se encuenta en la carpeta functions/index.js
una vez cambiado, para desplegarlo se utiliza el comando:
```javascript
firebase deploy --only functions
```
