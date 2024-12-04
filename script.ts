// Show "Back to Top" button on scroll
const backToTopButton = document.querySelector('.back-to-top') as HTMLElement;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Select the landing section
const landingSection = document.querySelector('.home-landing');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const fadeOpacity = Math.min(scrollY / window.innerHeight, 1); // Calculate opacity
  landingSection.style.background = `
    linear-gradient(to bottom, rgba(0, 0, 0, ${fadeOpacity}) 70%, black 100%),
    url('path-to-background-image.jpg') no-repeat center center/cover
  `;
  landingSection.style.backgroundBlendMode = 'overlay';
});
