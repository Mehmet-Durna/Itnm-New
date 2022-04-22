const nav = document.getElementById("myNav");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

function openNav() {
  nav.style.opacity = "1";
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeNav() {
  nav.style.opacity = "0";
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
}
