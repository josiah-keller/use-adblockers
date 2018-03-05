export function toArray(iterable) {
    return Array.prototype.slice.call(iterable);
}

export function $(selector) {
    return document.querySelector(selector);
}
export function $$(selector) {
    return document.querySelectorAll(selector);
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
    element.classList[condition ? "add" : "remove"](className);
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

export function bindArray(array, targetElement, template, bindingFn) {
    template.classList.add("template-element");
    targetElement.innerHTML = "";
    array.forEach((item, index) => {
        let itemElement = template.cloneNode(true);
        itemElement.classList.remove("template-element");
        itemElement.setAttribute("data-array-index", index);
        targetElement.appendChild(itemElement);
        toArray(itemElement.querySelectorAll("[data-binding-class]")).forEach(child => {
            let className = child.getAttribute("data-binding-class") + "-" + index;
            child.classList.add(className);
            bindingFn(array[index], className);
        });
    });
}