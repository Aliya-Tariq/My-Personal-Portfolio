const matrix = document.getElementById("matrix");
const ctx = matrix.getContext("2d");

// Setting the canvas size to fullscreen
matrix.height = window.innerHeight;
matrix.width = window.innerWidth;

// Creating an array of characters to use for the rain
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+[]{}|;':\",.<>?/\\-=`~".split("");
const font_size = 10;
const columns = matrix.width / font_size; // this is number of columns for the rain

const drops = []; // an array of drops - one per column

// Filling the drops[] array with drops from the top of the screen
for (let x = 0; x < columns; x++) {
drops[x] = 1;
}

// Main animation loop
function draw() {
// Clear the canvas
ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, matrix.width, matrix.height);

ctx.fillStyle = "#0F0"; // Green text
ctx.font = font_size + "px arial";

// Loop through the drops[] array and draw a character for each drop
for (let i = 0; i < drops.length; i++) {
let text = characters[Math.floor(Math.random() * characters.length)];
ctx.fillText(text, i * font_size, drops[i] * font_size);

// Reset the drop to the top when it reaches the bottom of the screen
if (drops[i] * font_size > matrix.height && Math.random() > 0.975) {
  drops[i] = 0;
}

// Increment the y position of each drop
drops[i]++;

}

// Calling the draw() function again in a few milliseconds
setTimeout(draw, 33);
}

draw();

// NAVBAR func that disappears on scroll down and appears on scroll up 

const nav = document.querySelector("nav");
const navHeight = 70;
// the point the scroll starts from (in px)
let lastScrollY = 0;
// how far to scroll (in px) before triggering
const delta = 10;

// function to run on scrolling
function scrolled() {
  let sy = window.scrollY;
  // only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("nav-up");
    } 
    // scroll up -> show nav bar
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
    }
   // updating current scroll point
   lastScrollY = sy 
  }
}

// Adding event listener & debounce so not constantly checking for scroll
let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)


// function myFunction(x) {
//     x.classList.toggle("change");
//   }

// function showSidebar (){
//     const sidebar = document .querySelector ('.sidebar')
//     sidebar.style.display = 'flex'
// }

// function hideSidebar (){
//     const sidebar = document .querySelector ('.sidebar')
//     sidebar.style.display = 'none'
// }

// function toggleSidebar() {
//   document.querySelector('.sidebar')
//     .classList.toggle('closed');
// }

