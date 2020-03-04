var items = [];
var elementDropdown;
var changeableElements = ['BODY', 'HEADER', 'FOOTER', 'ASIDE', 'ARTICLE', 'SECTION'];

window.onload = function (){
    elementDropdown = document.getElementById("elementDropdown");
    var allElements = document.getElementsByTagName("*");

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

function onClick(){
    var index = elementDropdown.options[elementDropdown.selectedIndex].index;
    var element = items[index];
    element.style["color"] = "red";
}