const images = [
    "assets/1.png",
    "assets/2.png",
    "assets/3.png",
    "assets/4.png",
    "assets/5.png",
    "assets/6.png",
    "assets/7.png",
    "assets/8.png",
    "assets/9.png",
    "assets/10.png",
    "assets/11.png",
    "assets/12.png",
    "assets/13.png"
    
  ]; // Array of image URLs
  let currentIndex = 0; // Starting index
  
  const imgElement = document.getElementById('galleryImg');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  
  // Event listener for the Next button
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image, loop back to the first after the last image
    imgElement.src = images[currentIndex]; // Update the image source
  });
  
  // Event listener for the Previous button
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image, loop back to the last after the first image
    imgElement.src = images[currentIndex]; // Update the image source
  })
  function generateReport() {
    const reportType = document.getElementById('report-type').value;
    alert(`Generating ${reportType} report...`);
    // Implement report generation logic here
  }
  
  // Example of adding event listeners for dropdowns if needed
  document.querySelectorAll('.dropdown-toggle').forEach(dropdown => {
    dropdown.addEventListener('click', function() {
      this.nextElementSibling.classList.toggle('show');
    });
  });
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }