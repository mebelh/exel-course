import { ExcelComponent } from "../../core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = "excel__toolbar";

    constructor($root) {
        super($root, {
            name: "toolbar",
            listeners: ["click"],
        });
    }

    toHTML() {
        return `
            <div class="">
                <div class="button"><span class="material-icons">format_align_left</span></div>
            </div>
            <div class="">
                <div class="button"><span class="material-icons">format_align_center</span></div>
            </div>
            <div class="">
                <div class="button"><span class="material-icons">format_align_right</span></div>
            </div>
            <div class="">
                <div class="button"><span class="material-icons">format_bold</span></div>
            </div>
            <div class="">
                <div class="button"><span class="material-icons">format_italic</span></div>
            </div>
            <div class="">
                <div class="button"><span class="material-icons">format_underlined</span></div>
            </div>
        `;
    }

    onClick(event) {
        console.log(event.target);
    }
}
