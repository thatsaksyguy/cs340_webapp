//Citation for the add.js code structure.

// Date: 12/6/2024

// Adapted from w3 schools overlay
// function structure copied from example.

// Source URL: https://www.w3schools.com/howto/howto_css_overlay.asp

document.addEventListener("DOMContentLoaded", function () {
    const showAddButton = document.getElementById("show-add");
    const closeOverlayButton = document.getElementById("close-add-overlay");

    showAddButton.addEventListener("click", function () {
        document.getElementById("add-overlay").style.display = "flex";
    });

    closeOverlayButton.addEventListener("click", function () {
        document.getElementById("add-overlay").style.display = "none";
    });
});
