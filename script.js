$(".item").tilt({
  glare: true,
  maxGlare: 0.8,
});

// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  sections.forEach((sect) => {
    // returns px this document has scrolled from the upper-left corner of the window
    let top = window.scrollY;
    // returns top position(in px) of that visible sect excluding top 100px part
    let offset = sect.offsetTop - 100;
    // returns viewable height of that visible sect(in px) including it's padding, border & scrollbar, but not/excluding margin
    let height = sect.offsetHeight;
    // returns the value of that visible sect's 'id' attribute's value
    let id = sect.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar Links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });

      // Active sections for animations on scroll
      sect.classList.add("show-animate");
    }
    // Repeating animations on scroll
    else {
      sect.classList.remove("show-animate");
    }
  });
});

window.onscroll = () => {
  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Progress-Bars in skllis section

const progressBars = document.querySelectorAll(".progress .bar span");
const aboutB = document.querySelector(".trigger");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

window.addEventListener("scroll", () => {
  const aboutSecPosition = aboutB.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (aboutSecPosition < screenHeight) {
    showProgress();
  }
});
