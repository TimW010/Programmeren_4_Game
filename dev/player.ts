import { Object } from "./object.js";

export class Player extends Object {

    private verticalSpeed : number = 0;
    private horizontalSpeed : number = 0;

    constructor(tagName : string) {
        super("player");
        this.element.style.backgroundImage = `url(./images/${tagName}.png)`;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));

        this.x = ((window.innerWidth / 2) - (this.element.clientWidth / 2));
        this.y = ((window.innerHeight) - (this.element.clientHeight));
    }

    public update() : void {
        super.update();
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        if(this.y > ((window.innerHeight) - (this.element.clientHeight))){
            this.y = ((window.innerHeight) - (this.element.clientHeight));
        }
        if (this.y < 0){
            this.y = 0; 
        } 
        if (this.x > (1600 - this.element.clientWidth)){
            this.x = (1600 - this.element.clientWidth);
        }
        if (this.x < 320){
            this.x = 320;
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        //console.log(`${e} is pressed!`);
        switch (e.key) {
            case "w":
                this.verticalSpeed = -10;
                break;
            case "s":
                this.verticalSpeed = 10;
                break;
            case "a":
                this.horizontalSpeed = -10;
                break;
            case "d":
                this.horizontalSpeed = 10;
                break;
            case "ArrowUp":
                this.verticalSpeed = -10;
                break;
            case "ArrowDown":
                this.verticalSpeed = 10;
                break;
            case "ArrowLeft":
                this.horizontalSpeed = -10;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 10;
                break;
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        //console.log(`${e} is released!`);
        if(e.key == "w" || e.key == "s") {
            this.verticalSpeed = 0;
        } else if (e.key == "a" || e.key == "d") {
            this.horizontalSpeed = 0;
        }
    }
}