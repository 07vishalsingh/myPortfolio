document.addEventListener("DOMContentLoaded", function () {
  // Function to handle smooth scrolling for anchor tags
  function handleSmoothScrolling(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      const offset = 60; // Adjust the value based on your header height
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }

  // Function to handle sticky navigation
  function toggleStickyNavigation() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", !nav.classList.contains("sticky"));
  }

  // Add click event listeners for smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      handleSmoothScrolling.call(this, e);
      toggleStickyNavigation(); // Toggle sticky navigation on anchor click
    });
  });

  // Add click event listener for the clickable image
  let clickableImage = document.getElementById("clickableImage");
  clickableImage.addEventListener("click", function () {
    this.classList.toggle("enlarged"); // Toggle the 'enlarged' class on click
    toggleStickyNavigation(); // Toggle sticky navigation on image click
  });

  // Function to handle download resume animation
  function downloadResume() {
    // Replace the placeholder logic with actual download logic
    // For example, you can use the following code to simulate a download
    const resumeLink = document.createElement("a");
    resumeLink.href = "path/to/your/resume.pdf";
    resumeLink.download = "Vishal_Singh_Resume.pdf"; // Adjust the filename
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
  }

  // Add click event listener for the download button
  let downloadButton = document.querySelector(".download-button");
  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      downloadResume();
    });
  }
});
