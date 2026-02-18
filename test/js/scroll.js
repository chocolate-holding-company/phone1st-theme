//top progress bar and back to top
window.addEventListener("scroll", () => {
 const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
 const scrollPercent = scrollTotal > 0 ? window.scrollY / scrollTotal : 0;

 document.getElementById("top-progress-bar").style.width =
  scrollPercent * 100 + "%";

 const ring = document.getElementById("progress-ring");
 const circum = 22 * 2 * Math.PI;
 ring.style.strokeDashoffset = circum - scrollPercent * circum;
 document
  .getElementById("back-to-top")
  .classList.toggle("visible", window.scrollY > 300);
});
//highlight js
hljs.highlightAll();
