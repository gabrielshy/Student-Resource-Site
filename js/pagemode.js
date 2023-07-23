document.addEventListener("DOMContentLoaded", function() {

    var icon = document.getElementById("icon");


    const darkModePreference = localStorage.getItem("darkMode");


    if (darkModePreference === "enabled") {
        document.body.classList.add("dark-theme");
        icon.src = "../images/night-mode.png";
    } else {
        document.body.classList.remove("dark-theme");
        icon.src = "../images/contrast.png";
    }

    icon.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            icon.src = "../images/night-mode.png";
            localStorage.setItem("darkMode", "enabled");
        } else {
            icon.src = "../images/contrast.png";
            localStorage.setItem("darkMode", "disabled");
        }
    };
});