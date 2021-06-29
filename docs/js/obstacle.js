import { Object } from "./object.js";
export class Obstacle extends Object {
    constructor(game) {
        super("obstacle");
        this.carCollection = ["Lamborghini", "Ferrari", "Chevrolet", "Toyota"];
        this.game = game;
        this.changeCar();
        this.x = Math.floor(Math.random() * ((1579 - this.element.clientWidth) - 340) + 340);
        this.y = (0 - (this.element.clientHeight * 2));
    }
    changeCar() {
        let tagName = this.carCollection[Math.floor(Math.random() * this.carCollection.length)];
        this.element.style.backgroundImage = `url(./images/${tagName}.png)`;
        this.element.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
    }
    update(speed) {
        super.update();
        this.y += speed;
        if (this.y - this.element.clientHeight > window.innerHeight) {
            this.changeCar();
            this.x = Math.floor(Math.random() * ((1579 - this.element.clientWidth) - 340) + 340);
            this.y = (0 - (this.element.clientHeight * 2));
        }
    }
}
//# sourceMappingURL=obstacle.js.map