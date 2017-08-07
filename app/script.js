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
    element.querySelectorAll("img").forEach(img => {
        img.draggable = false;
    });
}

function toggleSecondaryReasons() {
    document.body.classList.toggle("secondary-reasons-toggled");
}

function toggleWhatIs() {
    document.body.classList.toggle("what-is-toggled");
}

function toggleWizard() {
    document.body.classList.toggle("wizard-toggled");
}

function init() {
    clickable($("secondary-reasons-toggle"), toggleSecondaryReasons);
    clickable($("what-is-button"), toggleWhatIs);
    clickable($("wizard-close"), toggleWizard);
    clickable($("get-started-button"), toggleWizard);
}

document.addEventListener("DOMContentLoaded", init);