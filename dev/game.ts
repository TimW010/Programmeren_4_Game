import { Background } from "./background.js";
import { Menu } from "./menu.js";
import { Object } from "./object.js";

export class Game {
    
    private velocity : number;
    private screen : Object;
    private background : Background;

    constructor(){
        this.background = new Background();
        this.screen = new Menu(this);
        this.gameLoop();
    }

    private gameLoop(){
        this.background.update(3);
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }

    public changeScreen(screen : Object){
        this.screen.remove();
        this.screen = screen;
    }

}

new Game();