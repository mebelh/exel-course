import { capitalize } from "./utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error("No $root provided for dom listener");
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            if (!this[method]) {
                const name = this.name || "";
                throw new Error(
                    `Method ${method} is not implemented in ${name} component`
                );
            }
            this[method] = this[method].bind(this);
            // Тоже самое что addEventLitener
            this.$root.on(listener, this[method]);
        });
    }

    removeDOMListners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            this.$root.off(listener, this[method]);
        });
    }
}

// input => onInput
function getMethodName(eveneName) {
    return "on" + capitalize(eveneName);
}
