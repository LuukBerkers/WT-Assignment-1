function fillPage() {
  var body = document.querySelector("body");

  var header = document.createElement("header");
  body.appendChild(header);
  var h1 = document.createElement("h1");
  header.appendChild(h1);
  var h1Text = document.createTextNode("Databases");
  h1.appendChild(h1Text);

}

window.addEventListener("load", fillPage, false);
