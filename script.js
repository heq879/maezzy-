document.addEventListener("DOMContentLoaded", function () {
  // Function to check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Select all fact elements and sections
  const facts = document.querySelectorAll('.fact');
  const sections = {
    about: document.querySelector('.parent-container'),
    works: document.querySelector('#works-section'),
    fact: document.querySelector('#fact-section')
  };
  const dots = {
    about: document.querySelector('#about-dot'),
    works: document.querySelector('#works-dot'),
    fact: document.querySelector('#fact-dot')
  };

  // Function to handle animation and dot activation
  function handleScroll() {
    // Handle facts animation
    facts.forEach(fact => {
      if (isInViewport(fact)) {
        fact.classList.add('visible');
      }
    });

    // Handle dot activation
    Object.keys(sections).forEach(key => {
      if (isInViewport(sections[key])) {
        Object.values(dots).forEach(dot => dot.classList.remove('active'));
        dots[key].classList.add('active');
      }
    });
  }

  // Initial check on load
  handleScroll();

  // Scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Additional check after a short delay to ensure facts are visible if they're in view
  setTimeout(handleScroll, 100);
});
