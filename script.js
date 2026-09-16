// PAGE NAVIGATION

function showSection(sectionId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(sectionId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    } else {
        console.log("Section not found: " + sectionId);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// DARK / LIGHT MODE

function toggleTheme() {

    document.body.classList.toggle("light");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light")) {
        button.textContent = "🌙";
    } else {
        button.textContent = "☀️";
    }
}


// START WEBSITE

document.addEventListener("DOMContentLoaded", function() {

    showSection("home");

});