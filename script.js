// Initialize EmailJS
emailjs.init('6dAek5ZWnvQ6C6qZo'); 

// Send Email Function
function sendMail() {
    // Get form data
    const name = document.getElementById('onoma').value;
    const surname = document.getElementById('epitheto').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    const service = 'service_7c4b521'; 
    const template = 'template_3v37w4r'; 

    // Send the email using EmailJS
    emailjs.send(service, template, {
        name: name,
        surname: surname,
        email: email,
        message: message
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        displayMessage("Message sent successfully!", "success"); 
        document.getElementById('contact-form').reset();
    }, (error) => {
        console.log('FAILED...', error);
        displayMessage("Oops! Something went wrong. Please try again later.", "error"); 
    });
}

function displayMessage(text, type) {
    const messageContainer = document.getElementById('message-container');
    const messageText = document.getElementById('message-text');
    messageText.textContent = text; 
    messageContainer.classList.remove("hidden", "success", "error"); 
    messageContainer.classList.add(type); 
    messageContainer.style.display = "block"; 
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    sendMail(); 
});

function displayMessage(text, type) {
    const messageContainer = document.getElementById('message-container');
    const messageText = document.getElementById('message-text');
    messageText.textContent = text; 
    messageContainer.classList.remove("hidden", "success", "error"); 
    messageContainer.classList.add(type); 
    messageContainer.style.display = "block"; 
  
    const okButton = document.getElementById('okButton');
    okButton.addEventListener('click', () => {
      messageContainer.style.display = "none";
      messageContainer.classList.remove(type); 
      location.reload(); 
    });
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    sendMail(); 
  });
