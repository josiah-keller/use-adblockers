function $(id) {
    return document.getElementById(id);
}

function toggleSecondaryReasons() {
    document.body.classList.toggle("secondary-reasons-toggled");
}

function init() {
    $("secondary-reasons-toggle").addEventListener("click", toggleSecondaryReasons);
}

document.addEventListener("DOMContentLoaded", init);