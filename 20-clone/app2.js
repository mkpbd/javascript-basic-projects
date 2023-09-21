// Get references to the original element and the container where clones will be appended.
const originalElement = document.getElementById('originalElement');
const container = document.getElementById('container');

// Function to clone an element and attach event listeners.
function cloneAndAddListeners() {
  const clonedElement = originalElement.cloneNode(true);

  // Attach event listeners to the cloned element.
  clonedElement.addEventListener('click', () => {
    alert('Cloned element clicked');
  });

  // Append the cloned element to the container.
  container.appendChild(clonedElement);
}

// Attach a click event listener to the clone button.
const cloneButton = document.getElementById('cloneButton');
cloneButton.addEventListener('click', cloneAndAddListeners);
