const getBottomLinks = ["Home", "About", "Test", "Scss", "Class", "Tester"];
const docTitle = pageLink.toLowerCase();
const container = document.querySelector(".bottom-links");

container.innerHTML = getBottomLinks
 .filter((link) => link.toLowerCase() !== docTitle)
 .map((link) => {
  const urlName = link.toLowerCase().replace(/ /g, "-");
  let path = "";

  if (docTitle === "home") {
   // We are on the index page, go INTO the test folder
   path = `test/${urlName}.html`;
  } else {
   // We are INSIDE the test folder
   if (urlName === "home") {
    // Go UP to the root index
    path = `../index.html`;
   } else {
    // Stay in the current folder for other links
    path = `${urlName}.html`;
   }
  }

  return `<li class="list-none inline text-sm"><a href="${path}">${link}</a></li>`;
 })
 .join("");
