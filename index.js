// Function to handle card click event
function handleCardClick(event) {
  const cardOverlay = event.currentTarget.querySelector('.card-overlay');
  
  // Toggle the visibility of card-overlay by adding or removing the 'active' class
  cardOverlay.classList.toggle('active');
}

// Function to close the card overlay
function closeCardOverlay(event) {
  // Find the closest parent card-overlay element
  const cardOverlay = event.target.closest('.card-overlay');
  
  // Remove the 'active' class to hide the card overlay
  if (cardOverlay) {
    cardOverlay.classList.remove('active');
  }
}

// Get all the cards
const cards = document.querySelectorAll('.card');

// Attach click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', handleCardClick);
});

// Get the close buttons inside card overlays
const closeButtons = document.querySelectorAll('.card-overlay .close-button');

// Attach click event listener to each close button
closeButtons.forEach(button => {
  button.addEventListener('click', closeCardOverlay);
});
