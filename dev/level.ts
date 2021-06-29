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
            if(this.checkCollision(this.player.getBoundingRectangle(), car.getBoundingRectangle())){
                console.log("collision");
                this.game.pause = !this.game.pause;
                this.ui.saveScore();
            }
        }
    }

    public remove(){
        //remove
    }

    private checkCollision(player: ClientRect, object: ClientRect) : boolean {
        return (player.left <= object.right &&
            object.left <= player.right &&
            player.top <= object.bottom &&
            object.top <= player.bottom)
    }


}