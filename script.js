// LOADER SEQUENCE
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loaderText");

setTimeout(() => loaderText.innerText = "Fetching Installer...", 1000);
setTimeout(() => loaderText.innerText = "Loading Animation...", 2000);
setTimeout(() => loader.style.display = "none", 3000);

// DARK / LIGHT MODE
const themeSwitch = document.getElementById("themeSwitch");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeSwitch.checked = true;
}

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark");
});

// API STATUS (FAKE DEMO)
setTimeout(() => {
  document.getElementById("apiStatus").innerText = "Online";
}, 1500);

// PARTICLES (CUSTOM)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({length: 100}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2+1,
  dx: Math.random()-0.5,
  dy: Math.random()-0.5
}));

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(100,150,255,0.8)";
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
