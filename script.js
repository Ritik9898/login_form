function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("modeBtn");

  if (document.body.classList.contains("dark-mode")) {
    btn.innerHTML = "☀️ Light Mode";
  } else {
    btn.innerHTML = "🌙 Dark Mode";
  }
}
