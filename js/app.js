var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("wrapper").style.borderBottomLeftRadius = "25px";
    document.getElementById("wrapper").style.borderBottomRightRadius = "25px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("scroll", function(){
  if(window.scrollY==0){
    document.getElementById("wrapper").style.borderRadius = "0px";
  }
});

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");

  if (navbarMenu.classList.contains("is-active")) {
    navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
  } else {
    navbarMenu.removeAttribute("style");
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);