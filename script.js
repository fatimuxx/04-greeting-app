let userName = "Fatima";

// Get the button and the message area from the page.
let welcomeButton = document.getElementById("welcome-button");
let welcomeMessage = document.getElementById("welcome-message");

// When the button is clicked, show a welcome message using userName.
welcomeButton.addEventListener("click", function () {
	welcomeMessage.textContent = "Welcome! " + userName + "!";
});