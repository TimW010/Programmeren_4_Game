import { Object } from "./object.js";
import { Selector } from "./selector.js";
export class Menu extends Object {
    constructor(game) {
        super("menu");
        const title = document.createElement("title");
        const button = document.createElement("div");
        this.element.appendChild(title);
        this.element.appendChild(button);
        button.addEventListener("click", () => {
            let nextScreen = new Selector(game);
            game.changeScreen(nextScreen);
        });
    }
}
//# sourceMappingURL=menu.js.map