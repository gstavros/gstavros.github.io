// Initialize EmailJS
emailjs.init('6dAek5ZWnvQ6C6qZo'); 

// Send Email Function
function sendMail() {
    // Get form data
    const name = document.getElementById('onoma').value;
    const surname = document.getElementById('epitheto').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an EmailJS service object
    const service = 'service_7c4b521'; // Replace with your service ID
    const template = 'template_3v37w4r'; // Replace with your template ID

    // Send the email using EmailJS
    emailjs.send(service, template, {
        name: name,
        surname: surname,
        email: email,
        message: message
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Display a success message to the user
        displayMessage("Message sent successfully!", "success"); 
        // Clear the form after sending
        document.getElementById('contact-form').reset();
    }, (error) => {
        console.log('FAILED...', error);
        // Display an error message to the user
        displayMessage("Oops! Something went wrong. Please try again later.", "error"); 
    });
}

// Function to display the success or error message
function displayMessage(text, type) {
    const messageContainer = document.getElementById('message-container');
    const messageText = document.getElementById('message-text');
    messageText.textContent = text; 
    messageContainer.classList.remove("hidden", "success", "error"); 
    messageContainer.classList.add(type); 
    messageContainer.style.display = "block"; 
}

// Attach the sendMail function to the form's submit event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    sendMail(); 
});

// Function to display the success or error message (Modified)
function displayMessage(text, type) {
    const messageContainer = document.getElementById('message-container');
    const messageText = document.getElementById('message-text');
    messageText.textContent = text; 
    messageContainer.classList.remove("hidden", "success", "error"); 
    messageContainer.classList.add(type); 
    messageContainer.style.display = "block"; 
  
    // Add event listener to OK button
    const okButton = document.getElementById('okButton');
    okButton.addEventListener('click', () => {
      messageContainer.style.display = "none";
      messageContainer.classList.remove(type); 
      location.reload(); // Refresh the page
    });
  }
  
  // Attach the sendMail function to the form's submit event
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    sendMail(); 
  });
