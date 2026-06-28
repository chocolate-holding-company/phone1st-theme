document.addEventListener("DOMContentLoaded", () => {
 const headers = document.querySelectorAll(".dropdown-header");
 const OPEN_MENU_CLASS = "open-menu";

 headers.forEach((header) => {
  header.addEventListener("click", () => {
   const targetId = header.getAttribute("data-target");
   const targetMenu = document.querySelector(targetId);

   // 1. Check if the clicked header is already open
   const isAlreadyOpen = targetMenu.classList.contains(OPEN_MENU_CLASS);
   // 2. Close ALL other dropdowns
   document.querySelectorAll(`.${OPEN_MENU_CLASS}`).forEach((menu) => {
    menu.classList.remove(OPEN_MENU_CLASS);
   });
   document.querySelectorAll(".open").forEach((head) => {
    head.classList.remove("open");
   });

   // 3. Toggle the clicked dropdown's state
   if (!isAlreadyOpen) {
    // OPEN the current dropdown
    targetMenu.classList.add(OPEN_MENU_CLASS);

    // 4. SCROLL THE HEADER TO THE TOP OF THE WINDOW
    header.scrollIntoView({
     behavior: "smooth", // Optional: provides a smooth animation
     block: "start", // Crucial: Aligns the top of the element to the top of the viewport
    });
    header.classList.add("open");
   }
  });
 });
});