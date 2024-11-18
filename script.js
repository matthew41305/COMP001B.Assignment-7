// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

document.addEventListener("DOMContentLoaded", function() {
    // Balloon
  
    // Get the balloon element by its ID
    let balloon = document.getElementById("balloon");
    // Set the initial font size for the balloon
    let currentSize = 20; // Initial font size in px
  
    // Add an event listener for keydown events on the window
    window.addEventListener("keydown", function(event) {
      // Check if the pressed key is the up arrow
      if (event.key === "ArrowUp") {
        event.preventDefault(); // Prevent the default scrolling behavior
        currentSize *= 1.1; // Increase the size by 10%
        // Check if the balloon size exceeds the explosion limit/threshold
        if (currentSize > 100) { // explosion size limit
          balloon.textContent = "💥"; // Changes the balloon to explosion emoji
          // Remove the event listener to stop further size changes
          window.removeEventListener("keydown", arguments.callee);
        } else {
          // Set the new font size for the balloon
          balloon.style.fontSize = currentSize + "px";
        }
      } else if (event.key === "ArrowDown") {
        event.preventDefault(); // Prevent the default scrolling behavior
        currentSize *= 0.9; // Decrease size by 10%
        // Set the new font size for the balloon
        balloon.style.fontSize = currentSize + "px";
      }
    });
  
// tabbed layout 

//
let tabs = 