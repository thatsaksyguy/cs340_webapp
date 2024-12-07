 //Citation for the index.hbs code structure.

// Date: 12/6/2024

// Adapted from w3 schools overlay
// function structure copied from example.

// Source URL: https://www.w3schools.com/howto/howto_css_overlay.asp

document.addEventListener("DOMContentLoaded", function () {
    const showUpdateButton = document.getElementById("show-update");
    const closeOverlayButton = document.getElementById("close-update-overlay");

    showUpdateButton.addEventListener("click", function () {
        document.getElementById("update-overlay").style.display = "flex";
    });

    closeOverlayButton.addEventListener("click", function () {
        document.getElementById("update-overlay").style.display = "none";
    });
});
