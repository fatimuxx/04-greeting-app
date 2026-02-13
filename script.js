let userName = "";

// Get the input, button, and message area from the page.
let nameInput = document.getElementById("name-input");
let welcomeButton = document.getElementById("welcome-button");
let welcomeMessage = document.getElementById("welcome-message");

// When the button is clicked, read the input and show a fun message.
welcomeButton.addEventListener("click", function () {
	// Save what the user typed into userName.
	userName = nameInput.value;

	// Build a fun message using string concatenation.
	welcomeMessage.textContent = "Welcome, " + userName + "! You are awesome!";

	// Clear the input so it is ready for a new name.
	nameInput.value = "";
});