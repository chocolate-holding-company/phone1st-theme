//change theme to dark mode
function toggleTheme() {
 const isDark = document.body.getAttribute("data-theme") === "dark";
 document.body.setAttribute("data-theme", isDark ? "light" : "dark");
 document.getElementById("theme-toggle").innerText = isDark
  ? "🌙 Dark Mode"
  : "☀️ Light Mode";
 localStorage.setItem("theme", isDark ? "light" : "dark");
}
if (localStorage.getItem("theme") === "dark") toggleTheme();
