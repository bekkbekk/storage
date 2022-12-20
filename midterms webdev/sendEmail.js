function sendEmail() {
    Email.send({
        SecureToken: '00a2365e-9bd2-4e0b-8310-b2e1a1f1ba91',
        To: 'jerwin.jek@gmail.com',
        From: 'bekkappsmanager@gmail.com',
        Subject: "MIDTERMS - " + getCurrentDate(),
        Body: "<strong>Name</strong>: " + document.getElementById('name').value +
            "<br> <strong>Email</strong>: " + document.getElementById('email').value +
            "<br> <strong>Message</strong>: <br><br>" +
            document.getElementById('message').value.replaceAll('\n', '<br>') + "<br><br>"
    }).then(
        message => {
            if (message == 'OK') {
                alert('Message sent successfully to Jerwin Lalap!');
                document.querySelector('.contact-form').reset();
            } else {
                alert(message);
            }
        }
    );
}

function getCurrentDate() {
    let currentDate = new Date();

    let day = doubleDigitMaker(currentDate.getDate());
    let month = doubleDigitMaker(currentDate.getMonth());
    let year = doubleDigitMaker(currentDate.getFullYear());
    let hours = doubleDigitMaker(currentDate.getHours());
    let mins = doubleDigitMaker(currentDate.getMinutes());
    let secs = doubleDigitMaker(currentDate.getSeconds());

    let dateAndTime = `${month}/${day}/${year} - ${hours}:${mins}:${secs}`
    return dateAndTime;
}

function doubleDigitMaker(digit) {
    digit = String(digit);
    if (digit.length == 1) {
        return '0' + digit;
    }
    return digit;
}