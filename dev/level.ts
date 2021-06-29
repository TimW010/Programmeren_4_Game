import { Game } from "./game.js";
import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";
import { Object } from "./object.js";
import { UI } from "./ui.js";
import { EndScreen } from "./endScreen.js";

export class Level extends Object {

    private euroBeat : string[] = ["Deja_Vu", "NoOneSleepInTokyo", "RunningInThe90s"]

    private ui : UI;
    private player : Player;
    private game : Game;
    private obstacles : Obstacle[] = [];
    private music : HTMLAudioElement;

    constructor(game : Game, car : string){
        super("level");
        this.game = game;
        this.music = new Audio(`./music/${this.euroBeat[Math.floor(Math.random() * this.euroBeat.length)]}.mp3`);
        this.music.play();
        this.game._play = true;
        this.player = new Player(car);
        this.ui = new UI(this.game);
        this.obstacles.push(new Obstacle(this.game), new Obstacle(this.game), new Obstacle(this.game), new Obstacle(this.game))
    }

    public update(){
        this.player.update();
        this.ui.update();
        for(let car of this.obstacles){
            car.update(this.game._velocity);
            if(this.checkCollision(this.player.getBoundingRectangle(), car.getBoundingRectangle())){
                console.log("collision");
                this.ui.saveScore();
                this.game._play = false;
                this.endGame();
            }
        }
    }

    private endGame(){
        this.music.pause();
        super.remove();
        this.player.remove();
        this.element.remove();
        for(let obstacle of this.obstacles){
            obstacle.remove();
        }
        this.game.changeScreen(new EndScreen(this.game));
    }

    private checkCollision(player: ClientRect, object: ClientRect) : boolean {
        return (player.left <= object.right &&
            object.left <= player.right &&
            player.top <= object.bottom &&
            object.top <= player.bottom)
    }


}