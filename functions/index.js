const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({
    origin: true
});
//const SENDGRID_API_KEY = functions.config().sendgrid.key


//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

exports.emailMessage = functions.https.onRequest((req, res) => {
    const { name, email, phone, message } = req.body;
    return cors(req, res, () => {
        return new Promise(resolve, reject => {
            var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Phone - ${phone || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
            const msg = {
                to: "alexandro4v@gmail.com",
                from: "no-reply@myemail.com",
                subject: `name sent you a new message`,
                text: "text",
                html: "text"
            };
            sgMail.setApiKey("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")
            sgMail.send(msg);
            res.status(200).send("success");

        }).catch( () => {
            res.status(500).send("error");

        })
    }).catch(() => {
        res.status(500).send("error");
    });
});