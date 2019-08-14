/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];
const header = document.querySelector(".menu-button");
let body = document.querySelector("body");
body.prepend(menuCreator());

/*  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.
*/

function menuCreator() {
  const divCreator = document.createElement("div");
  const ulCreator = document.createElement("ul");
  divCreator.classList.add("menu");
  divCreator.appendChild(ulCreator);

  /*  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
*/
  let newMenuItems = menuItems.map(function(item) {
    return liMaker(item);
  });
  newMenuItems.forEach(function(item) {
    ulCreator.appendChild(item);
  });
  function liMaker(text) {
    let newItem = document.createElement("li");
    newItem.textContent = text;
    return newItem;
  }
  /*  Step 3: Using a DOM selector, select the menu button currently on the DOM.
   */
  /*  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
   */
  let button = document
    .querySelector(".menu-button")
    .addEventListener("click", () => {
      divCreator.classList.toggle("menu--open");
      return button;
    });
  /*  Step 6: add the menu component to the DOM.
   */
  return divCreator;
}
