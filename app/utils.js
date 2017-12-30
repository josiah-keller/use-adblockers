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

export function setConditionalClass(className, condition, element) {
    if (! element) element = document.body;
    document.body.classList[condition ? "add" : "remove"](className);
}

export function bindProp(className, propName, value, context) {
    context = context || document.body;
    toArray(context.querySelectorAll(`.${className}`)).forEach(element => {
        element[propName] = value;
    });
}

export function bindText(className, text, context) {
    return bindProp(className, "textContent", text, context);
}