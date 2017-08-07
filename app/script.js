function $(id) {
    return document.getElementById(id);
}

function clickable(element, handler) {
    element.addEventListener("click", e => {
        this.blur();
        handler.call(this, e);
    });
    element.addEventListener("keypress", e => {
        if (e.keyCode !== 13) return;
        e.preventDefault();
        handler.call(this, e);
    });
}

function toggleSecondaryReasons() {
    document.body.classList.toggle("secondary-reasons-toggled");
}

function toggleWhatIs() {
    document.body.classList.toggle("what-is-toggled");
}

function init() {
    clickable($("secondary-reasons-toggle"), toggleSecondaryReasons);
    clickable($("what-is-button"), toggleWhatIs);
}

document.addEventListener("DOMContentLoaded", init);