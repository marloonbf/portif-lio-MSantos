const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

const typingText = document.getElementById("typing-text");

const words = [
  "Desenvolvedor Front-End",
  "Power BI Developer",
  "Data Analytics",
  "Marketing Analytics"
];

let wordIndex = 0;

setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  typingText.textContent = words[wordIndex];
}, 2200);

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

particlesJS("particles-js", {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#a100ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.45
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a100ff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 160,
        line_linked: {
          opacity: 0.7
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});