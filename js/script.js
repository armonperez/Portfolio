document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
  
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 1000); // 1 second delay between each
    });
  });
  
  
  