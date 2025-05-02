document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: .3
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: stops observing once visible
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  
  