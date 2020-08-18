import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./tabel.template";

export class Table extends ExcelComponent {
    static className = "excel__table";

    toHTML() {
        return createTable();
    }
}
