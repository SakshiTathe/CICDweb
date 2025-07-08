window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
let titleOne = document.getElementById("title-one");
let titleTwo = document.getElementById("title-two");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    titleOne.style.right = value * 0.5 + "px";
    titleTwo.style.left = value * 0.5 + "px";
});
function toggleMenu() {
    var x = document.getElementById("nav-links-sub");
    if (x.style.left != "0px") {
        x.style.left = "0px";
        document.body.style.overflowY = "hidden";
    } else {
        x.style.left = "-200px";
        document.body.style.overflowY = "visible";
    }
}