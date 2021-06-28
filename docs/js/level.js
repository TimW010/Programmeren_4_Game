import { Player } from "./player.js";
import { Object } from "./object.js";
export class Level extends Object {
    constructor(game, car) {
        super("level");
        this.obstacles = [];
        this.game = game;
        this.player = new Player(car);
    }
    update() {
    }
    remove() {
    }
}
//# sourceMappingURL=level.js.map