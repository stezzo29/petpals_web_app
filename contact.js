"use strict";

// JavaScript to handle modal functionality
var modal = document.getElementById("modal");
var btn = document.getElementById("contactBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "block";
};

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

const contactBtn = document.getElementById('contactBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];
const form = document.querySelector('.form');

// Open the modal when the "Contact Us" button is clicked
contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the user clicks the close button
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Validate the email address when the form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    // Fetch the JSON data from contact.json
    fetch('contact.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Use the JSON data in your JavaScript code
            console.log(data); // Display the JSON data in the console

            // Access specific properties from the JSON data
            const domains = data.domains;
            const disposable = data.disposable;
            const dns = data.dns;

            // Validate the email address using the email validation API
            if (email !== '') {
                const emailDomain = email.split('@')[1];
                const isValidDomain = domains.includes(emailDomain);

                if (isValidDomain) {
                    // Email domain is valid, submit the form
                    form.submit();
                } else {
                    // Email domain is invalid, display an error message
                    const errorElement = document.createElement('p');
                    errorElement.classList.add('error');
                    errorElement.textContent = 'Invalid email domain';
                    form.appendChild(errorElement);
                }
            } else {
                // Display an error message if the email field is empty
                const errorElement = document.createElement('p');
                errorElement.classList.add('error');
                errorElement.textContent = 'Please enter an email address';
                form.appendChild(errorElement);
            }
        })
        .catch(function(error) {
            // Display an error message if the request fails
            console.log('Error: ' + error.message);
        });
});
