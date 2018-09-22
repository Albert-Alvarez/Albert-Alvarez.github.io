window.onclick = function(e) {
    var hamburguerMenu = document.getElementsByClassName("hamburguer-menu")[0]; 
    var outsideHamburguerMenu = !hamburguerMenu.contains(e.target);
    if (outsideHamburguerMenu && hamburguerMenu.classList.contains("is-active")) {
        toggleHamburguerMenuState(e, hamburguerMenu);
    }
};

function toggleHamburguerMenuState(e, parentHamburguerMenu) {
    var hamburguerMenu = parentHamburguerMenu.getElementsByClassName("hambuguer-menu-toggle")[0]; 
    var label = hamburguerMenu.getElementsByClassName("hamburguer-menu-label")[0];

    if (parentHamburguerMenu.classList) { 
        parentHamburguerMenu.classList.toggle("is-active");
    } else {
        // For IE9
        var classes = parentHamburguerMenu.className.split(" ");
        var i = classes.indexOf("is-active");
    
        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("is-active");
        parentHamburguerMenu.className = classes.join(" "); 
    }

    if (label.innerHTML == "Menu") {
        label.innerHTML = "Close";
    } else {
        label.innerHTML = "Menu";
    }
    return;
}