document.addEventListener('DOMContentLoaded', function () {
    const originalButton = document.getElementById('originalButton');
    const cloneButton = document.getElementById('cloneButton');
  
    // Event listener for the original button
    originalButton.addEventListener('click', function () {
      alert('Original button clicked');
    });
  
    // Event listener for the clone button
    cloneButton.addEventListener('click', function () {
      // Clone the original button along with its child nodes
      const clonedButton = originalButton.cloneNode(true);
  
      // Remove the original button from the DOM
      originalButton.remove();
  
      // Attach the cloned button to the DOM
      document.body.appendChild(clonedButton);
  
      // Manually attach event listeners to the cloned button
      clonedButton.addEventListener('click', function () {
        alert('Cloned button clicked');
      });
    });
  });
  