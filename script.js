const text = "Im a beginner passionate about programming, currently learning and working toward becoming a software developer...\nThanks for visiting...";

let index = 0;

function typeText() {

    if (index < text.length) {

        document.getElementById("typing").textContent += text[index];

        index++;

        setTimeout(typeText, 100);

    }

}

typeText();

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});
