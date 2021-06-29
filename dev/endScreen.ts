import { Game } from "./game.js";
import { Menu } from "./menu.js";
import { Object } from "./object.js";

export class EndScreen extends Object {

    constructor(game : Game){
        super("endScreen");

        const text = document.createElement("text");
        const button = document.createElement("div");        

        this.element.appendChild(text);
        this.element.appendChild(button);

        button.addEventListener("click", () => game.changeScreen(new Menu(game)));
    }

}