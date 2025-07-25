// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  document.querySelector('.navbar').classList.toggle('shrink', window.scrollY > 50);
};

// Smooth scroll to top
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input, textarea");
      for (let input of inputs) {
        if (!input.value.trim()) {
          alert("Please fill in all fields.");
          input.focus();
          e.preventDefault();
          return;
        }
      }
    });
  }
});
