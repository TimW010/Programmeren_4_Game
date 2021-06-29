import { Game } from "./game.js";
import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";
import { Object } from "./object.js";
import { UI } from "./ui.js";

export class Level extends Object {

    private ui : UI;
    private player : Player;
    private game : Game;
    private obstacles : Obstacle[] = [];

    constructor(game : Game, car : string){
        super("level");
        this.game = game;
        this.game.play = true;
        this.player = new Player(car);
        this.ui = new UI(this.game);
        this.obstacles.push(new Obstacle(this.game), new Obstacle(this.game))
    }

    public update(){
        this.player.update();
        this.ui.update();
        for(let car of this.obstacles){
            car.update(this.game.velocity);
        }
    }

    public remove(){
        //remove
    }


}