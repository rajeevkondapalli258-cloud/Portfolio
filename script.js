// ========================================
// PAGE NAVIGATION
// ========================================

function showSection(sectionId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(sectionId);


    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


// ========================================
// DARK / LIGHT MODE
// ========================================

function toggleTheme() {

    document.body.classList.toggle("light");


    const button =
        document.querySelector(".theme-btn");


    if (
        document.body.classList.contains("light")
    ) {

        button.textContent = "🌙";

    } else {

        button.textContent = "☀️";

    }
}


// ========================================
// GET INPUT VALUE
// ========================================

function getValue(id) {

    const element =
        document.getElementById(id);

    if (element) {

        return element.value.trim();

    }

    return "";

}


// ========================================
// SAVE PORTFOLIO
// ========================================

function savePortfolio() {

    const data = {

        name:
            getValue("editName"),

        email:
            getValue("editEmail"),

        github:
            getValue("editGithub"),

        linkedin:
            getValue("editLinkedin"),

        about:
            getValue("editAbout"),

        education:
            getValue("editEducation"),

        college:
            getValue("editCollege"),

        years:
            getValue("editYears"),

        project1Title:
            getValue("editProject1Title"),

        project1Text:
            getValue("editProject1Text"),

        project2Title:
            getValue("editProject2Title"),

        project2Text:
            getValue("editProject2Text"),

        project3Title:
            getValue("editProject3Title"),

        project3Text:
            getValue("editProject3Text"),

        project4Title:
            getValue("editProject4Title"),

        project4Text:
            getValue("editProject4Text")

    };


    // Save to browser

    localStorage.setItem(
        "rajPortfolio",
        JSON.stringify(data)
    );


    // Update website

    updatePortfolio(data);


    // Show success message

    alert(
        "✅ Portfolio updated successfully!"
    );


    // Go to Home

    showSection("home");
}


// ========================================
// UPDATE WEBSITE
// ========================================

function updatePortfolio(data) {


    // NAME

    if (data.name) {

        document.getElementById(
            "navName"
        ).textContent = data.name;


        document.getElementById(
            "homeName"
        ).textContent = data.name;


        document.getElementById(
            "aboutName"
        ).textContent = data.name;


        document.getElementById(
            "footerName"
        ).textContent = data.name;


        document.getElementById(
            "footerName2"
        ).textContent = data.name;

    }


    // EMAIL

    if (data.email) {

        const email =
            document.getElementById(
                "contactEmail"
            );


        email.textContent =
            data.email;


        email.href =
            "mailto:" + data.email;

    }


    // GITHUB

    if (data.github) {

        const github =
            document.getElementById(
                "contactGithub"
            );


        github.href =
            makeUrl(data.github);


        github.textContent =
            data.github;

    }


    // LINKEDIN

    if (data.linkedin) {

        const linkedin =
            document.getElementById(
                "contactLinkedin"
            );


        linkedin.href =
            makeUrl(data.linkedin);


        linkedin.textContent =
            data.linkedin;

    }


    // ABOUT

    if (data.about) {

        document.getElementById(
            "aboutText"
        ).textContent =
            data.about;

    }


    // EDUCATION

    if (data.education) {

        document.getElementById(
            "educationTitle"
        ).textContent =
            data.education;

    }


    // COLLEGE

    if (data.college) {

        document.getElementById(
            "educationCollege"
        ).textContent =
            data.college;

    }


    // YEARS

    if (data.years) {

        document.getElementById(
            "educationYears"
        ).textContent =
            data.years;

    }


    // PROJECT 1

    if (data.project1Title) {

        document.getElementById(
            "project1Title"
        ).textContent =
            data.project1Title;

    }


    if (data.project1Text) {

        document.getElementById(
            "project1Text"
        ).textContent =
            data.project1Text;

    }


    // PROJECT 2

    if (data.project2Title) {

        document.getElementById(
            "project2Title"
        ).textContent =
            data.project2Title;

    }


    if (data.project2Text) {

        document.getElementById(
            "project2Text"
        ).textContent =
            data.project2Text;

    }


    // PROJECT 3

    if (data.project3Title) {

        document.getElementById(
            "project3Title"
        ).textContent =
            data.project3Title;

    }


    if (data.project3Text) {

        document.getElementById(
            "project3Text"
        ).textContent =
            data.project3Text;

    }


    // PROJECT 4

    if (data.project4Title) {

        document.getElementById(
            "project4Title"
        ).textContent =
            data.project4Title;

    }


    if (data.project4Text) {

        document.getElementById(
            "project4Text"
        ).textContent =
            data.project4Text;

    }
}


// ========================================
// MAKE URL
// ========================================

function makeUrl(url) {

    if (
        url.startsWith("http://") ||
        url.startsWith("https://")
    ) {

        return url;

    }


    return "https://" + url;
}


// ========================================
// LOAD SAVED PORTFOLIO
// ========================================

function loadPortfolio() {

    const saved =
        localStorage.getItem(
            "rajPortfolio"
        );


    if (!saved) {

        loadDefaultValues();

        return;
    }


    try {

        const data =
            JSON.parse(saved);


        // Put values into edit fields

        document.getElementById(
            "editName"
        ).value =
            data.name || "";


        document.getElementById(
            "editEmail"
        ).value =
            data.email || "";


        document.getElementById(
            "editGithub"
        ).value =
            data.github || "";


        document.getElementById(
            "editLinkedin"
        ).value =
            data.linkedin || "";


        document.getElementById(
            "editAbout"
        ).value =
            data.about || "";


        document.getElementById(
            "editEducation"
        ).value =
            data.education || "";


        document.getElementById(
            "editCollege"
        ).value =
            data.college || "";


        document.getElementById(
            "editYears"
        ).value =
            data.years || "";


        document.getElementById(
            "editProject1Title"
        ).value =
            data.project1Title || "";


        document.getElementById(
            "editProject1Text"
        ).value =
            data.project1Text || "";


        document.getElementById(
            "editProject2Title"
        ).value =
            data.project2Title || "";


        document.getElementById(
            "editProject2Text"
        ).value =
            data.project2Text || "";


        document.getElementById(
            "editProject3Title"
        ).value =
            data.project3Title || "";


        document.getElementById(
            "editProject3Text"
        ).value =
            data.project3Text || "";


        document.getElementById(
            "editProject4Title"
        ).value =
            data.project4Title || "";


        document.getElementById(
            "editProject4Text"
        ).value =
            data.project4Text || "";


        // Update website

        updatePortfolio(data);


    } catch (error) {

        console.log(
            "Could not load saved data:",
            error
        );

        loadDefaultValues();

    }
}


// ========================================
// DEFAULT VALUES
// ========================================

function loadDefaultValues() {

    const defaults = {

        name: "Rajeev",

        email: "your-email@example.com",

        github:
            "https://github.com/yourusername",

        linkedin:
            "https://linkedin.com/in/yourusername",

        about:
            "I am a B.Tech Computer Science Engineering student interested in programming, web development and emerging technologies.",

        education:
            "B.Tech Computer Science Engineering",

        college:
            "Swarnandhra Engineering College",

        years:
            "2024 - 2028",

        project1Title:
            "JARVIS Assistant",

        project1Text:
            "A personal voice assistant built using Python and Termux.",

        project2Title:
            "Racing Game",

        project2Text:
            "A browser-based racing game with interactive controls.",

        project3Title:
            "Environmental Website",

        project3Text:
            "A website created for environmental awareness.",

        project4Title:
            "Chat Application",

        project4Text:
            "A chat application project inspired by modern messaging platforms."

    };


    // Fill edit fields

    document.getElementById(
        "editName"
    ).value =
        defaults.name;


    document.getElementById(
        "editEmail"
    ).value =
        defaults.email;


    document.getElementById(
        "editGithub"
    ).value =
        defaults.github;


    document.getElementById(
        "editLinkedin"
    ).value =
        defaults.linkedin;


    document.getElementById(
        "editAbout"
    ).value =
        defaults.about;


    document.getElementById(
        "editEducation"
    ).value =
        defaults.education;


    document.getElementById(
        "editCollege"
    ).value =
        defaults.college;


    document.getElementById(
        "editYears"
    ).value =
        defaults.years;


    document.getElementById(
        "editProject1Title"
    ).value =
        defaults.project1Title;


    document.getElementById(
        "editProject1Text"
    ).value =
        defaults.project1Text;


    document.getElementById(
        "editProject2Title"
    ).value =
        defaults.project2Title;


    document.getElementById(
        "editProject2Text"
    ).value =
        defaults.project2Text;


    document.getElementById(
        "editProject3Title"
    ).value =
        defaults.project3Title;


    document.getElementById(
        "editProject3Text"
    ).value =
        defaults.project3Text;


    document.getElementById(
        "editProject4Title"
    ).value =
        defaults.project4Title;


    document.getElementById(
        "editProject4Text"
    ).value =
        defaults.project4Text;

}


// ========================================
// CURSOR EFFECT
// ========================================

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );


let mouseX = 0;

let mouseY = 0;

let glowX = 0;

let glowY = 0;


document.addEventListener(
    "mousemove",
    function(event) {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        cursorDot.style.left =
            mouseX + "px";


        cursorDot.style.top =
            mouseY + "px";

    }
);


// Smooth glow movement

function animateCursor() {

    glowX +=
        (mouseX - glowX) * 0.08;


    glowY +=
        (mouseY - glowY) * 0.08;


    cursorGlow.style.left =
        glowX + "px";


    cursorGlow.style.top =
        glowY + "px";


    requestAnimationFrame(
        animateCursor
    );
}


animateCursor();


// ========================================
// CURSOR HOVER EFFECT
// ========================================

document.addEventListener(
    "mouseover",
    function(event) {

        if (
            event.target.closest(
                "button, a, input, textarea"
            )
        ) {

            cursorGlow.style.width =
                "380px";

            cursorGlow.style.height =
                "380px";

        }

    }
);


document.addEventListener(
    "mouseout",
    function(event) {

        if (
            event.target.closest(
                "button, a, input, textarea"
            )
        ) {

            cursorGlow.style.width =
                "300px";

            cursorGlow.style.height =
                "300px";

        }

    }
);


// ========================================
// START WEBSITE
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showSection("home");

        loadPortfolio();

    }
);
