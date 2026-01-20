/* PARTICLES CONFIG */
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#1e90ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#1e90ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});

/* GITHUB RELEASE FETCH */
const downloadBtn = document.getElementById("download-btn");
const downloadText = document.getElementById("download-text");
const loading = document.getElementById("loading");

const apiUrl =
  "https://api.github.com/repos/hulivili-coder/PCManager/releases/latest?ts=" +
  Date.now();

async function fetchRelease() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Release not found");

    const data = await res.json();
    const exe = data.assets.find(a =>
      a.name.toLowerCase().endsWith(".exe")
    );

    if (!exe) throw new Error("No exe");

    downloadBtn.href = exe.browser_download_url;
    downloadBtn.classList.remove("disabled");
    downloadText.textContent = "Download PC Manager";

  } catch (err) {
    downloadText.textContent = "Download unavailable";
  } finally {
    loading.style.display = "none";
  }
}

fetchRelease();
