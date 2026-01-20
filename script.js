/* Loading sequence */
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loader-text");
const main = document.getElementById("main-content");

setTimeout(() => loaderText.textContent = "Fetching Installer...", 1200);
setTimeout(() => loaderText.textContent = "Loading Animation...", 2400);

setTimeout(() => {
  loader.style.display = "none";
  main.classList.remove("hidden");
}, 3600);

/* Fake API status */
const apiStatus = document.getElementById("api-status");
setTimeout(() => {
  apiStatus.textContent = "Online";
  apiStatus.className = "status online";
}, 2000);

/* Download button */
function download() {
  window.location.href =
    "https://github.com/hulivili-coder/PCManager/releases/latest";
}

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Particle background (NO LIBRARY) */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function animateParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#3a7bff";
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();

window.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};
