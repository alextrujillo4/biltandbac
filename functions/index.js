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
    const data = req.body.name;
    console.log(data)

    //<<< Personal Info
    const variable = data[0].variable;
    const name = data[1].name;
    const email = data[2].email;
    const phone = data[3].phone;
    const birthdate = data[4].birthdate;

    //<<< Seguro Info
    const seguro_info = data[5].seguro_info;
    const type = seguro_info.type;
    const coverage = seguro_info.coverage;

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@bnbseguros.com',
            pass: '80408975Jl.'
        }
    });
    var mailOptions = null;
    if (variable === "Automatic"){
         mailOptions = {
            from: "Bilt&Bac | Mensaje Automático <info@bnbseguros.com>",
            to: "plara@bnbseguros.com",
            subject: "Alguien podría estar interesado en una cotización",
            text: `Nombre: ${name} | Correo Electrónico: ${email} | Teléfono: ${phone} | Fecha de nacimiento: ${birthdate} | Tipo de Seguro Interesado: ${type} | Tipo de Covertura: ${coverage}` ,
            html: `<p style="font-size:large">Nombre: ${name}<br><br>Correo Electrónico: ${email}<br>Teléfono: ${phone}<br>Fecha de nacimiento: ${birthdate}<br>Tipo de Seguro Interesado: ${type}<br>Tipo de Covertura: ${coverage}</p>`
        }

    }else if (variable === "Cotizador"){
        mailOptions = {
            from: "Bilt&Bac | Mensaje Automático <info@bnbseguros.com>",
            to: "plara@bnbseguros.com",
            subject: "Solicitud de cotización",
            text: `Nombre: ${name} | Correo Electrónico: ${email} | Teléfono: ${phone} | Fecha de nacimiento: ${birthdate} | Tipo de Seguro Interesado: ${type} | Tipo de Covertura: ${coverage}` ,
            html: `<p style="font-size:large">Nombre: ${name}<br><br>
                    Correo Electrónico: ${email}<br>
                    Teléfono: ${phone}<br>
                    Fecha de nacimiento: ${birthdate}<br>
                    Tipo de Seguro Interesado: ${type}<br>
                    Tipo de Covertura: ${coverage}</p>`
        }
        var userOptions = {
            from: "Bilt&Bac | Mensaje Automático <info@bnbseguros.com>",
            to: email,
            subject: "Bilt&Bac | Hemos recibido tu correo! ",
            text: `Hola!: ${name}, Hemos recibido tu correo electrónico de sulicitud de cotización. Un asesor se contactará contigo lo más pronto posible.` ,
            html: `
                <!doctype html>
                <html>
                  <head>
                    <meta name="viewport" content="width=device-width" />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <title>Simple Transactional Email</title>
                    <style>
                      /* -------------------------------------
                          GLOBAL RESETS
                      ------------------------------------- */
                      
                      /*All the styling goes here*/
                      
                      img {
                        border: none;
                        -ms-interpolation-mode: bicubic;
                        max-width: 100%; 
                      }
                
                      body {
                        background-color: #f6f6f6;
                        font-family: sans-serif;
                        -webkit-font-smoothing: antialiased;
                        font-size: 14px;
                        line-height: 1.4;
                        margin: 0;
                        padding: 0;
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%; 
                      }
                
                      table {
                        border-collapse: separate;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        width: 100%; }
                        table td {
                          font-family: sans-serif;
                          font-size: 14px;
                          vertical-align: top; 
                      }
                
                      /* -------------------------------------
                          BODY & CONTAINER
                      ------------------------------------- */
                
                      .body {
                        background-color: #f6f6f6;
                        width: 100%; 
                      }
                
                      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                      .container {
                        display: block;
                        margin: 0 auto !important;
                        /* makes it centered */
                        max-width: 580px;
                        padding: 10px;
                        width: 580px; 
                      }
                
                      /* This should also be a block element, so that it will fill 100% of the .container */
                      .content {
                        box-sizing: border-box;
                        display: block;
                        margin: 0 auto;
                        max-width: 580px;
                        padding: 10px; 
                      }
                
                      /* -------------------------------------
                          HEADER, FOOTER, MAIN
                      ------------------------------------- */
                      .main {
                        background: #ffffff;
                        border-radius: 3px;
                        width: 100%; 
                      }
                
                      .wrapper {
                        box-sizing: border-box;
                        padding: 20px; 
                      }
                
                      .content-block {
                        padding-bottom: 10px;
                        padding-top: 10px;
                      }
                
                      .footer {
                        clear: both;
                        margin-top: 10px;
                        text-align: center;
                        width: 100%; 
                      }
                        .footer td,
                        .footer p,
                        .footer span,
                        .footer a {
                          color: #999999;
                          font-size: 12px;
                          text-align: center; 
                      }
                
                      /* -------------------------------------
                          TYPOGRAPHY
                      ------------------------------------- */
                      h1,
                      h2,
                      h3,
                      h4 {
                        color: #000000;
                        font-family: sans-serif;
                        font-weight: 400;
                        line-height: 1.4;
                        margin: 0;
                        margin-bottom: 30px; 
                      }
                
                      h1 {
                        font-size: 35px;
                        font-weight: 300;
                        text-align: center;
                        text-transform: capitalize; 
                      }
                
                      p,
                      ul,
                      ol {
                        font-family: sans-serif;
                        font-size: 14px;
                        font-weight: normal;
                        margin: 0;
                        margin-bottom: 15px; 
                      }
                        p li,
                        ul li,
                        ol li {
                          list-style-position: inside;
                          margin-left: 5px; 
                      }
                
                      a {
                        color: #3498db;
                        text-decoration: underline; 
                      }
                
                      /* -------------------------------------
                          BUTTONS
                      ------------------------------------- */
                      .btn {
                        box-sizing: border-box;
                        width: 100%; }
                        .btn > tbody > tr > td {
                          padding-bottom: 15px; }
                        .btn table {
                          width: auto; 
                      }
                        .btn table td {
                          background-color: #ffffff;
                          border-radius: 5px;
                          text-align: center; 
                      }
                        .btn a {
                          background-color: #ffffff;
                          border: solid 1px #3498db;
                          border-radius: 5px;
                          box-sizing: border-box;
                          color: #3498db;
                          cursor: pointer;
                          display: inline-block;
                          font-size: 14px;
                          font-weight: bold;
                          margin: 0;
                          padding: 12px 25px;
                          text-decoration: none;
                          text-transform: capitalize; 
                      }
                
                      .btn-primary table td {
                        background-color: #3498db; 
                      }
                
                      .btn-primary a {
                        background-color: #3498db;
                        border-color: #3498db;
                        color: #ffffff; 
                      }
                
                      /* -------------------------------------
                          OTHER STYLES THAT MIGHT BE USEFUL
                      ------------------------------------- */
                      .last {
                        margin-bottom: 0; 
                      }
                
                      .first {
                        margin-top: 0; 
                      }
                
                      .align-center {
                        text-align: center; 
                      }
                
                      .align-right {
                        text-align: right; 
                      }
                
                      .align-left {
                        text-align: left; 
                      }
                
                      .clear {
                        clear: both; 
                      }
                
                      .mt0 {
                        margin-top: 0; 
                      }
                
                      .mb0 {
                        margin-bottom: 0; 
                      }
                
                      .preheader {
                        color: transparent;
                        display: none;
                        height: 0;
                        max-height: 0;
                        max-width: 0;
                        opacity: 0;
                        overflow: hidden;
                        mso-hide: all;
                        visibility: hidden;
                        width: 0; 
                      }
                
                      .powered-by a {
                        text-decoration: none; 
                      }
                
                      hr {
                        border: 0;
                        border-bottom: 1px solid #f6f6f6;
                        margin: 20px 0; 
                      }
                
                      /* -------------------------------------
                          RESPONSIVE AND MOBILE FRIENDLY STYLES
                      ------------------------------------- */
                      @media only screen and (max-width: 620px) {
                        table[class=body] h1 {
                          font-size: 28px !important;
                          margin-bottom: 10px !important; 
                        }
                        table[class=body] p,
                        table[class=body] ul,
                        table[class=body] ol,
                        table[class=body] td,
                        table[class=body] span,
                        table[class=body] a {
                          font-size: 16px !important; 
                        }
                        table[class=body] .wrapper,
                        table[class=body] .article {
                          padding: 10px !important; 
                        }
                        table[class=body] .content {
                          padding: 0 !important; 
                        }
                        table[class=body] .container {
                          padding: 0 !important;
                          width: 100% !important; 
                        }
                        table[class=body] .main {
                          border-left-width: 0 !important;
                          border-radius: 0 !important;
                          border-right-width: 0 !important; 
                        }
                        table[class=body] .btn table {
                          width: 100% !important; 
                        }
                        table[class=body] .btn a {
                          width: 100% !important; 
                        }
                        table[class=body] .img-responsive {
                          height: auto !important;
                          max-width: 100% !important;
                          width: auto !important; 
                        }
                      }
                
                      /* -------------------------------------
                          PRESERVE THESE STYLES IN THE HEAD
                      ------------------------------------- */
                      @media all {
                        .ExternalClass {
                          width: 100%; 
                        }
                        .ExternalClass,
                        .ExternalClass p,
                        .ExternalClass span,
                        .ExternalClass font,
                        .ExternalClass td,
                        .ExternalClass div {
                          line-height: 100%; 
                        }
                        .apple-link a {
                          color: inherit !important;
                          font-family: inherit !important;
                          font-size: inherit !important;
                          font-weight: inherit !important;
                          line-height: inherit !important;
                          text-decoration: none !important; 
                        }
                        #MessageViewBody a {
                          color: inherit;
                          text-decoration: none;
                          font-size: inherit;
                          font-family: inherit;
                          font-weight: inherit;
                          line-height: inherit;
                        }
                        .btn-primary table td:hover {
                          background-color: #34495e !important; 
                        }
                        .btn-primary a:hover {
                          background-color: #34495e !important;
                          border-color: #34495e !important; 
                        } 
                      }
                
                    </style>
                  </head>
                  <body class="">
                    <span class="preheader">Hola!: ${name}, Hemos recibido tu correo electrónico</span>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
                      <tr>
                        <td>&nbsp;</td>
                        <td class="container">
                          <div class="content">
               
                            <!-- START CENTERED WHITE CONTAINER -->
                            <table role="presentation" class="main">
                
                              <!-- START MAIN CONTENT AREA -->
                              <tr>
                                <td class="wrapper">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td>
                                        <p>Hola!: ${name},</p>
                                        <p>Hemos recibido tu correo electrónico. Si tienes dudas, puedes escribirnos a nuestro whatsapp empresarial.</p>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                          <tbody>
                                            <tr>
                                              <td align="left">
                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                  <tbody>
                                                    <tr>
                                                      <td> <a href="https://api.whatsapp.com/send?phone=528112904687&text=&source=&data=" target="_blank">Enviar Whatsapp</a> </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <p>Un asesor se contactará contigo lo más pronto posible.</p>
                                        <p>Gracias por tu tiempo.</p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                
                            <!-- END MAIN CONTENT AREA -->
                            </table>
                            <!-- END CENTERED WHITE CONTAINER -->
               
                            <!-- START FOOTER -->
                            <div class="footer">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td class="content-block">
                                    <span class="apple-link">Bilt&Bac</span>
                                  </td>
                                </tr>
                                <tr>
                                </tr>
                              </table>
                            </div>
                            <!-- END FOOTER -->
                
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </body>
                </html>`
        }
        transporter.sendMail(userOptions, function (err, info) {
            if(err){
                console.log(err)
            } else {
                console.log(info);
            }
        });
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
