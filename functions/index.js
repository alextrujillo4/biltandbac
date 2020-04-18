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
    const { name} = req.body;
    console.log(name[0].name)


    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'pruebaalex159@gmail.com',
            pass: 'antivirus+'
        }
    });


    var mailOptions = {
        from: "John mailOptions <me@mydomain.com>",
        to: "alexandro4v@gmail.com",
        subject: "Registration successful",
        text: "You successfully registered an account at www.mydomain.com",
        html: "<p>You successfully registered an account at www.mydomain.com</p>"
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
