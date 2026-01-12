// Get the element with the id 'colorBtn'
const button = document.getElementById('colorBtn');

/**
 * Function to generate a random color
 * @returns {string} A random color in the format #RRGGBB
 */
function getRandomColor() {
  // The letters used in the color
  const letters = '0123456789ABCDEF';
  let color = '#'; // Start of the color
  
  // Generate the random color
  for (let i = 0; i < 6; i++) {
    // Choose a random letter from the letters
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color; // Return the random color
}

// Add an event listener for the click event on the button
button.addEventListener('click', () => {
  // Change the background color of the page to the random color
  document.body.style.backgroundColor = getRandomColor();
});