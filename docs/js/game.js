import { Background } from "./background.js";
import { Menu } from "./menu.js";
export class Game {
    constructor() {
        this.velocity = 3;
        this.velocityCounter = 0;
        this.play = false;
        this.pause = false;
        this.background = new Background();
        this.screen = new Menu(this);
        this.gameLoop();
    }
    get _play() {
        return this.play;
    }
    set _play(value) {
        this.play = value;
    }
    get _velocity() {
        return this.velocity;
    }
    gameLoop() {
        if (!this.pause) {
            if (this.play) {
                this.velocityCounter++;
                if (this.velocityCounter > 240) {
                    if (this.velocity !== 20) {
                        this.velocity++;
                        console.log(`Speed = ${this.velocity}`);
                    }
                    this.velocityCounter = 0;
                }
            }
            this.background.update(this.velocity);
            this.screen.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    changeScreen(screen) {
        this.velocity = 3;
        this.screen.remove();
        this.screen = screen;
    }
}
new Game();
//# sourceMappingURL=game.js.map