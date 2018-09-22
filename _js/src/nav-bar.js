var prevScrollPos = window.pageYOffset;
var toggleMenu = document.getElementsByClassName("hamburguer-menu")[0];
var navBar = document.getElementsByClassName("nav-bar")[0];

window.addEventListener('scroll', _.throttle(function () {
    var currentScrollPos = window.pageYOffset;
    if ((prevScrollPos > currentScrollPos)) {
        navBar.style.top = "0px";
    } else if ((currentScrollPos > 200)  && !(toggleMenu.classList.contains("is-active"))) {
        navBar.style.top = "-60px";
    }
    prevScrollPos = currentScrollPos;
}, 500));