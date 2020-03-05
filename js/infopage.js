/**
 * Create a text node and append it to an element as its child
 * @param {string} text
 * @param {Node} parent
 */
function addText(text, parent) {
  var textNode = document.createTextNode(text);
  parent.appendChild(textNode);
}

/**
 * Create a new HTML element and append it to another element
 * @param {string} tag
 * @param {Node} parent
 * @returns {HTMLElement}
 */
function makeElement(tag, parent) {
  var element = document.createElement(tag);
  parent.appendChild(element);

  return element;
}

/**
 * Create a new HTML element, append it to another element and giv it a text node
 * @param {string} tag
 * @param {Node} parent
 * @param {string} text
 * @returns {HTMLElement}
 */
function makeElementWithText(tag, parent, text) {
  element = makeElement(tag, parent);
  addText(text, element);

  return element;
}

function fillPage() {
  var body = document.querySelector("body");

  // Header
  var header = makeElement("header", body);
  makeElementWithText("h1", header, "Databases");

  // Navbar frame
  var navbar = makeElement("nav", body);
  navbar.setAttribute("class", "navbar");
  var navLinks = makeElement("ul", navbar);

  // Navbar links
  var links = {
    count: 5,
    names: ["Home", "Rooster", "Locaties", "Literatuur", "Beoordeling"],
    locations: [
      "index.html",
      "schedule.html",
      "locations.html",
      "literature.html",
      "grading.html"
    ]
  };

  for (i = 0; i < links.count; i++) {
    listItem = makeElement("li", navLinks);
    link = makeElementWithText("a", listItem, links.names[i]);
    link.setAttribute("href", links.locations[i]);
  }
}

window.addEventListener("load", fillPage, false);
