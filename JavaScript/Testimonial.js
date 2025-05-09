const testimonials = [
    {
      name: "John Doe",
      text: "Aaronz & Co. helped me find my dream apartment. Their team was supportive from start to finish!"
    },
    {
      name: "Sarah Khan",
      text: "Professional and quick. They made the entire buying process smooth and stress-free."
    },
    {
      name: "Omar Ahmed",
      text: "The financial consultation I received saved me a ton. Best property advisors in Dubai."
    },
    {
      name: "Aisha Noor",
      text: "From paperwork to handover, everything was handled with precision. Highly recommend Aaronz!"
    }
  ];

  function showTestimonial(index) {
    document.getElementById("testimonial-name").textContent = testimonials[index].name;
    document.getElementById("testimonial-text").textContent = testimonials[index].text;

    const thumbnails = document.querySelectorAll(".testimonial-thumbnails img");
    thumbnails.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }