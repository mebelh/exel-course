import { $ } from "@core/dom";

export function resizeHandler($root, event) {
    const $resizer = $(event.target);
    // const $parent = $resizer.$el.parentNode;
    const $parent = $resizer.closest('[data-type="resizable"]');

    const cords = $parent.getCords();
    const type = $resizer.data.resize;
    let value;

    $resizer.css({ opacity: 1 });

    document.onmousemove = (e) => {
        if (type === "col") {
            const delta = e.pageX - cords.right;
            value = cords.width + delta;
            $resizer.css({ left: value + "px", bottom: "-100vh" });
        } else {
            const delta = e.pageY - cords.bottom;

            console.log(cords);
            value = cords.height + delta;
            $resizer.css({ right: "-100vw", top: value + "px" });
        }
    };
    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        if (type === "col") {
            $root
                .findAll(`[data-col="${$parent.data.col}"]`)
                .forEach((el) => (el.style.width = value + "px"));
        } else {
            $parent.css({ height: value + "px" });
        }
        $resizer.css({ bottom: "0", opacity: 0, right: 0 });
    };
}
