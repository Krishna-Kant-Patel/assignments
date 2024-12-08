// Smooth scroll to sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    event.target.reset();
  });
  