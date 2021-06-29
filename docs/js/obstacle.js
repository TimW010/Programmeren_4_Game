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
    lanes() {
        const arrayOfLanes = [];
        const carWidth = this.element.clientWidth;
        const lane_1 = Math.floor(Math.random() * ((564 - carWidth) - 340) + 340);
        arrayOfLanes.push(lane_1);
        const lane_2 = Math.floor(Math.random() * ((824 - carWidth) - 564) + 564);
        arrayOfLanes.push(lane_2);
        const lane_3 = Math.floor(Math.random() * ((1084 - carWidth) - 824) + 824);
        arrayOfLanes.push(lane_3);
        const lane_4 = Math.floor(Math.random() * ((1344 - carWidth) - 1084) + 1084);
        arrayOfLanes.push(lane_4);
        const lane_5 = Math.floor(Math.random() * ((1579 - carWidth) - 1344) + 1344);
        arrayOfLanes.push(lane_5);
        return arrayOfLanes;
    }
    changeCar() {
        let tagName = this.carCollection[Math.floor(Math.random() * this.carCollection.length)];
        this.element.style.backgroundImage = `url(./images/${tagName}.png)`;
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