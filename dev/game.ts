import { Background } from "./background.js";
import { Menu } from "./menu.js";
import { Object } from "./object.js";

export class Game {
    
    private velocity : number = 3;
    private velocityCounter : number = 0;
    private screen : Object;
    private background : Background;
    private play: boolean = false;
    public pause : boolean = false;

    public get _play(): boolean {
        return this.play;
    }

    public set _play(value: boolean) {
        this.play = value;
    }

    get _velocity(){
        return this.velocity;
    }


    constructor(){
        this.background = new Background();
        this.screen = new Menu(this);
        this.gameLoop();
    }

    private gameLoop(){
        if(!this.pause){    
            if(this.play){
                this.velocityCounter++;
                if(this.velocityCounter > 240){
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

    public changeScreen(screen : Object){
        this.velocity = 3;
        this.screen.remove();
        this.screen = screen;
    }

}

new Game();