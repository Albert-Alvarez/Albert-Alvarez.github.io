"use strict";var i,coll=document.getElementsByClassName("collapsible");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",function(){this.classList.toggle("active");var a=this.nextElementSibling;a.style.maxHeight=a.style.maxHeight?null:a.scrollHeight+"px"});
"use strict";window.onclick=function(a){var b=document.getElementsByClassName("hamburguer-menu")[0],c=!b.contains(a.target);c&&b.classList.contains("is-active")&&toggleHamburguerMenuState(a,b)};function toggleHamburguerMenuState(a,b){var c=b.getElementsByClassName("hambuguer-menu-toggle")[0],d=c.getElementsByClassName("hamburguer-menu-label")[0];if(b.classList)b.classList.toggle("is-active");else{var e=b.className.split(" "),f=e.indexOf("is-active");0<=f?e.splice(f,1):e.push("is-active"),b.className=e.join(" ")}d.innerHTML="Menu"==d.innerHTML?"Close":"Menu"}
"use strict";
"use strict";var prevScrollPos=window.pageYOffset,toggleMenu=document.getElementsByClassName("hamburguer-menu")[0],navBar=document.getElementsByClassName("nav-bar")[0];window.addEventListener("scroll",_.throttle(function(){var a=window.pageYOffset;prevScrollPos>a?navBar.style.top="0px":200<a&&!toggleMenu.classList.contains("is-active")&&(navBar.style.top="-60px"),prevScrollPos=a},500));
"use strict";function search(a,b){var c=a.value.split(" "),d=document.getElementById(b),e=d.getElementsByClassName("results")[0],f=e.className.split(" ");0<c.length&&""!=c[0]?d.classList.add("show-results"):d.classList.remove("show-results")}
"use strict";function mainLoaded(){$(".spinner-background").fadeOut("slow",function(){$(".spinner-background").addClass("loaded")})}$("main").on("load",mainLoaded());
