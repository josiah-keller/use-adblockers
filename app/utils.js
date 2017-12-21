export function toArray(iterable) {
    return Array.prototype.slice.call(iterable);
}

export function $(id) {
    return document.getElementById(id);
}

export function clickable(element, handler) {
    element.addEventListener("click", function(e) {
        this.blur();
        handler.call(this, e);
    });
    element.addEventListener("keypress", function(e) {
        if (e.keyCode !== 13) return;
        e.preventDefault();
        handler.call(this, e);
    });
    toArray(element.querySelectorAll("img")).forEach(img => {
        img.draggable = false;
    });
}