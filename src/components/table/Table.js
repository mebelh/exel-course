import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./tabel.template";
import { resizeHandler } from "./table.resize";
import { shouldResize } from "./table.functions";

export class Table extends ExcelComponent {
    static className = "excel__table";

    constructor($root) {
        super($root, {
            listeners: ["mousedown"],
        });
    }

    toHTML() {
        return createTable();
    }

    onClick() {}

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        }
    }
}
