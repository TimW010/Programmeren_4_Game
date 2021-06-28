import { Background } from "./background.js";
import { Menu } from "./menu.js";
export class Game {
    constructor() {
        this.background = new Background();
        this.screen = new Menu(this);
        this.gameLoop();
    }
    gameLoop() {
        this.background.update(3);
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    changeScreen(screen) {
        this.screen.remove();
        this.screen = screen;
    }
}
new Game();
//# sourceMappingURL=game.js.map