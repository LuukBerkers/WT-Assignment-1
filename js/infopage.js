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

  // Content
  var content = makeElement("div", body);
  var article = makeElement("article", content);
  article.setAttribute("class", "content");
  makeElementWithText("h1", article, "Info");
  makeElementWithText(
    "p",
    article,
    "Deze website bevat informatie over de cursus databases.\
    De site is gebaseerd op de informatie over de echte cursus databases van\
    Hans Philippi en ontwikkeld door Mark Looije, Thijs Rademaker en Luuk\
    Berkers."
  );
  makeElementWithText(
    "p",
    article,
    "De body van deze pagina is volledig gegenereerd door JavaScript."
  );

  // Footer
  var footer = makeElement("footer", body);
  makeElementWithText(
    "p",
    footer,
    "Beschikbaar gesteld door: Luuk, Mark en Thijs"
  );
  var contactInfo = makeElementWithText("p", footer, "Contactinformatie: ");
  var email = makeElementWithText("a", contactInfo, "fakemail@gmail.com");
  email.setAttribute("href", "mailto:fakemail@gmail.com");
}

window.addEventListener("load", fillPage, false);
