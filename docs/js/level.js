import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";
import { Object } from "./object.js";
import { UI } from "./ui.js";
export class Level extends Object {
    constructor(game, car) {
        super("level");
        this.obstacles = [];
        this.game = game;
        this.game.play = true;
        this.player = new Player(car);
        this.ui = new UI(this.game);
        this.obstacles.push(new Obstacle(this.game), new Obstacle(this.game));
    }
    update() {
        this.player.update();
        this.ui.update();
        for (let car of this.obstacles) {
            car.update(this.game.velocity);
        }
    }
    remove() {
    }
}
//# sourceMappingURL=level.js.map