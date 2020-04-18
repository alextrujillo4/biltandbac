/*
function sendMail() {
    var url = 'https://us-central1-biltandbac.cloudfunctions.net/emailMessage';
    var data = {name: 'Alex Trujillo'};

    fetch(url, {
        method: 'GET', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
            'mode': 'cors',
    'headers': {
                ' Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',}
        }
    })
        .then(response => response.text())
        .then(contents => console.log(contents))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

}
*/
//export default sendMail