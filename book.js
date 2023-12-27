"use strict";

// Get the modal element
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var closeModalButton = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to handle cancel button click
function cancelForm() {
  closeModal();
}

// Event listener for the submit button that opens the modal
document.getElementById("openModal").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission
  openModal();
});

// Event listener for the close button in the modal
closeModalButton.addEventListener("click", function() {
  closeModal();
});

// Event listener for the submit button within the modal
document.getElementById("modalSubmit").addEventListener("click", function() {
  // Get the form elements
  var form1 = document.getElementById("form1");
  var form2 = document.getElementById("form2");

  // Submit the forms
  form1.submit();
  form2.submit();

  closeModal(); // Close the modal after submission
});

// Event listener for the cancel button within the modal
document.getElementById("modalCancel").addEventListener("click", function() {
  cancelForm();
});
