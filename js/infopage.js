/**
 * Create a new HTML element and append it to another element
 * @param {string} tag The tag name of the HTML DOM element to be created
 * @param {Node} parent The parent element to which the new element should be appended
 */
function makeElement(tag, parent) {
  var element = document.createElement(tag);
  parent.appendChild(element);

  return element;
}

/**
 * Create a text node and append it to an element as its child
 * @param {string} text String that contains the text to be added to the node
 * @param {Node} parent The parent element to which the text node should be appended
 */
function addText(text, parent) {
  var textNode = document.createTextNode(text);
  parent.appendChild(textNode);
}

function fillPage() {
  var body = document.querySelector("body");

  var header = makeElement("header", body);
  var h1 = makeElement("h1", header);
  addText("Databases", h1);
}

window.addEventListener("load", fillPage, false);
