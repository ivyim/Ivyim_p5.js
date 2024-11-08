// Get the elements from the HTML
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultParagraph = document.getElementById('result');

// Generate a random number between 1 and 100
//const secretNumber = 17;
const secretNumber = 8;



// Add an event listener to the submit button
submitButton.addEventListener('click', () => {
  // Get the user's guess
  const userGuess = parseInt(guessInput.value);

  // Check if the user's guess is correct
  if (userGuess === secretNumber) {
    resultParagraph.textContent = ' Congratulations! You guessed it!';
  } else if (userGuess < secretNumber) {
    resultParagraph.textContent = 'Too low! Try again!';
  } else {
    resultParagraph.textContent = 'Too high! Try again!';
  }
});