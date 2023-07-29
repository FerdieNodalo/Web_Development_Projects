//Setting the year in the footer using JavaScript
let footer = document.querySelector('span#year');
const d = new Date();
let year = d.getFullYear();
footer.textContent = year;
