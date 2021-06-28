import { Object } from "./object.js";
export class Player extends Object {
    constructor(tagName) {
        super("player");
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.element.style.backgroundImage = `url(./images/${tagName}.png)`;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.x = ((window.innerWidth / 2) - (this.element.clientWidth / 2));
        this.y = ((window.innerHeight) - (this.element.clientHeight));
    }
    update() {
        super.update();
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        if (this.y > ((window.innerHeight) - (this.element.clientHeight))) {
            this.y = ((window.innerHeight) - (this.element.clientHeight));
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.x > (1600 - this.element.clientWidth)) {
            this.x = (1600 - this.element.clientWidth);
        }
        if (this.x < 320) {
            this.x = 320;
        }
    }
    onKeyDown(e) {
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
    onKeyUp(e) {
        if (e.key == "w" || e.key == "s") {
            this.verticalSpeed = 0;
        }
        else if (e.key == "a" || e.key == "d") {
            this.horizontalSpeed = 0;
        }
    }
}
//# sourceMappingURL=player.js.map