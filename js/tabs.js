var tabButtons = document.querySelectorAll(".tabContent .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContent .tabPanel");

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function (node, index) {
        if (index === panelIndex) {
            node.classList.add("active");
            node.classList.remove("non-active");
        } else {
            node.classList.remove("active");
            node.classList.add("non-active");
        }
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "background-color: var(--primary-color);";
    tabPanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}

tabButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        showPanel(index, 'background-color: var(--primary-color);');
    });
});

showPanel(0, 'background-color: var(--primary-color);');