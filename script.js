/* ========= PARTICLES ========= */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: Math.random() * 2 + 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00aaff";

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

/* ========= GITHUB API ========= */
const owner = "hulivili-coder";
const repo = "PCManager";

const btn = document.getElementById("downloadBtn");
const spinner = document.getElementById("spinner");
const title = btn.querySelector(".title");
const releaseText = document.getElementById("releaseText");

fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
  .then(res => res.json())
  .then(data => {
    const asset =
      data.assets.find(a => a.name.toLowerCase().includes("setup"))
      || data.assets[0];

    btn.href = asset.browser_download_url;
    title.textContent = "Download PC Manager";
    releaseText.textContent = `Version ${data.tag_name}`;
    spinner.style.display = "none";
  })
  .catch(() => {
    title.textContent = "Download unavailable";
    releaseText.textContent = "Check GitHub manually";
    spinner.style.display = "none";
  });
