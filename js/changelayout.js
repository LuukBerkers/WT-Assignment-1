var items = [];
var elementDropdown;
var changeableElements = 'BODY, HEADER, FOOTER, ASIDE, ARTICLE, SECTION';

window.onload = function (){
    document.querySelector("#changeButton").addEventListener("click", change);

    elementDropdown = document.querySelector("#elementDropdown");
    var allElements = document.querySelectorAll(changeableElements);

    for (var element of allElements){
        if (changeableElements.includes(element.tagName)){
            items.push(element);
        }
    }

    items.forEach(item => {
        var element = document.createElement("option");
        element.textContent = item.tagName;
        elementDropdown.appendChild(element);
    });
}

function change(){
    var index = elementDropdown.options[elementDropdown.selectedIndex].index;
    var element = items[index];
    var regexColor = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
    var regexFontSize = new RegExp('^1[0-9]px$');

    var color = document.querySelector("#colorField").value.trim();
    var fontSize = document.querySelector("#fontField").value.trim();

    if (regexColor.test(color)){
        element.style["color"] = color;
    } else console.log("Not a valid color");
    if (regexFontSize.test(fontSize)){
        element.style["fontSize"] = fontSize;
    } else console.log("Not a valid fontsize");
}