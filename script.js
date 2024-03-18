<script>
    function sendMail() {
        let parms = {
            name: document.getElementById("onoma").value,
            Surname: document.getElementById("epitheto").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_9ot4lkr", "template_3v37w4r", parms)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email Sent!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again later.');
            });
    }
</script>