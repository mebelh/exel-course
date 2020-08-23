class Dom {
    constructor(selector) {
        // #app
        this.$$listeners = {};
        this.$el =
            typeof selector === "string"
                ? document.querySelector(selector)
                : selector;
    }

    html(html) {
        if (typeof html === "string") {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHtml.trim();
    }

    clear() {
        this.html("");
        return this;
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }

    off(eventType, callback) {
        // this.$$listeners[eventType] = callback;
        this.$el.removeEventListener(eventType, callback);
    }

    find(selector) {
        return $(this.$el.querySelector(selector));
    }

    text(text) {
        if (typeof text === "string") {
            this.$el.textContent = text;
            return this;
        }
        if (this.$el.tagName.toLowerCase() === "input") {
            return this.$el.value.trim();
        }
        // console.log(text);
        return this.$el.textContent.trim();
    }

    // Element
    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }

    get data() {
        return this.$el.dataset;
    }

    closest(selector) {
        return $(this.$el.closest(selector));
    }

    getCords() {
        return this.$el.getBoundingClientRect();
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }

    css(styles = {}) {
        Object.keys(styles).forEach(
            (key) => (this.$el.style[key] = styles[key])
        );
    }

    id(parse) {
        if (parse)
            return {
                row: +this.id().split(":")[0],
                col: +this.id().split(":")[1],
            };
        return this.data.id;
    }

    focus() {
        this.$el.focus();
        return this;
    }

    addClass(className) {
        this.$el.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.$el.classList.remove(className);
        return this;
    }
}

// event.taget
export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes = "") => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }
    return $(el);
};
