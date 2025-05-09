document.addEventListener("DOMContentLoaded", () => {
    const words = [
      "Dream Home",
      "Luxury Apartments",
      "Perfect Villa",
      "Dreamy Townhouse",
      "Cozy Retreat"
    ];
    const typingEl = document.getElementById("typing-text");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typingEl.textContent = currentWord.substring(0, charIndex);

      if (!isDeleting && charIndex === currentWord.length) {
        delay = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      } else {
        delay = isDeleting ? 50 : 100;
      }

      setTimeout(type, delay);
    }

    type();
  });

