// Select all image containers
const imageContainers = document.querySelectorAll('.img-container');

imageContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    // Reset all containers to default size
    imageContainers.forEach(c => {
      c.style.width = '5%';
      c.style.borderRadius = '0';
    });

    // Expand hovered container
    container.style.width = '40%';
    container.style.borderRadius = '20px';
  });

  container.addEventListener('mouseleave', () => {
    // Reset the container back to default
    container.style.width = '5%';
    container.style.borderRadius = '0';
  });
});
