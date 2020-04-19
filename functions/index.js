const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require("nodemailer");
const key = require('./biltandbac.json') ;

app.use(cors({ origin: true }));

app.get('/hello', (req, res) => {
    res.end("Received GET request!");
});

app.post('/hello', (req, res) => {
    const { data} = req.body;
    const type = data[0].type
    //<<<
    const email = data[0].email
    const body = data[0].body
    const name = data[0].name
    const phone = data[0].phone
    //<<<
    const seguro_info = data[0].seguro_info
    //<<<

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@bnbseguros.com',
            pass: '80408975Jl.'
        }
    });
    var mailOptions = null

    if (type === "Automatic"){
         mailOptions = {
            from: "Bilt & Bac | Mensaje Automático <info@bnbseguros.com>",
            to: email,
            subject: "Alguien podría estar interesado en una cotización",
            text: `Nombre: ${name}\nCorreo: ${email}\nPhone: ${phone}\nTipo de Seguro: ${seguro_info.name}\n Tipo de Seguro: ${seguro_info.name}` ,
            html: `<p>Nombre: ${name}\\nCorreo: ${email}\\nPhone: ${phone}\\nTipo de Seguro: ${seguro_info.name}\\n Tipo de Seguro: ${seguro_info.name}</p>`
        }

    }else if (type === "Cotizador"){
        mailOptions = {
            from: "Bilt & Bac | Cotizador <info@bnbseguros.com>",
            to: email,
            subject: "Solicitud de Cotización",
            text: `Nombre: ${name}\nCorreo: ${email}\nPhone: ${phone}\nTipo de Seguro: ${seguro_info.name}\n Tipo de Seguro: ${seguro_info.name}` ,
            html: `<p>Nombre: ${name}\\nCorreo: ${email}\\nPhone: ${phone}\\nTipo de Seguro: ${seguro_info.name}\\n Tipo de Seguro: ${seguro_info.name}</p>`
        }
    }


    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err)
            res.status(200).send("Mesage NOT Sent");
        } else {
            console.log(info);
            res.status(200).send("Mesage Sent");
        }
    });

});

// Expose Express API as a single Cloud Function:
exports.emailMessage = functions.https.onRequest(app);

//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
//Usa functions.https.onCall para crear una función HTTPS que admite llamadas. Este método recibe dos parámetros: data y context(opcional):
//The othe way: onRequest
