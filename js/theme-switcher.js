document.getElementById("switchThemeButton").addEventListener("click", () => {
  const el = document.querySelector("html");
  el.classList.toggle("dark-theme");
  el.classList.toggle("light-theme");
});
