document.getElementById("Contact").addEventListener("click", function () {
  window.open("contact.html")
})

document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // in view → show
        } else {
          entry.target.classList.remove("show"); // out of view → hide
        }
      });
    },
    { threshold: 0.2 } // trigger when 20% of element is visible
  );

  scrollElements.forEach(el => observer.observe(el));
});

