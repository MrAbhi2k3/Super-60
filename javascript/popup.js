// Get the image and popup elements
const img = document.querySelector('img');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

// When the user clicks on the image, show the popup
img.addEventListener('click', function() {
  popup.style.display = 'flex';
});

// When the user clicks on the close button, hide the popup
close.addEventListener('click', function() {
  popup.style.display = 'none';
});

// When the user clicks outside the popup, hide it
popup.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

