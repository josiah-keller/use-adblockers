function $(id) {
    return document.getElementById(id);
}

function clickable(element, handler) {
    element.addEventListener("click", handler);
    element.addEventListener("keypress", function(e) {
        if (e.keyCode !== 13) return;
        e.preventDefault();
        handler.call(this, e);
    });
}

function toggleSecondaryReasons() {
    document.body.classList.toggle("secondary-reasons-toggled");
}

function init() {
    clickable($("secondary-reasons-toggle"), toggleSecondaryReasons);
}

document.addEventListener("DOMContentLoaded", init);