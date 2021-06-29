import { Player } from "./player.js";
import { Object } from "./object.js";
import { UI } from "./ui.js";
export class Level extends Object {
    constructor(game, car) {
        super("level");
        this.obstacles = [];
        this.game = game;
        this.player = new Player(car);
        this.ui = new UI();
    }
    update() {
        this.player.update();
        this.ui.update();
    }
    remove() {
    }
}
//# sourceMappingURL=level.js.map