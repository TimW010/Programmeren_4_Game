import { Level } from "./level.js";
import { Object } from "./object.js";
export class Selector extends Object {
    constructor(game) {
        super("selector");
        this.cars = ["toyota", "ferrari", "lamborghini", "chevrolet"];
        this.game = game;
        this.showCars();
    }
    showCars() {
        for (let car of this.cars) {
            this.addCars(car);
        }
    }
    addCars(car) {
        const card = document.createElement("card");
        card.addEventListener("click", () => {
            this.chosenCar = car;
            let nextScreen = new Level(this.game, this.chosenCar);
            this.game.changeScreen(nextScreen);
        });
        card.classList.add("card");
        const name = document.createElement("name");
        name.innerHTML = car;
        card.appendChild(name);
        const image = document.createElement("img");
        image.src = `./images/${car}.png`;
        card.appendChild(image);
        this.element.appendChild(card);
    }
}
//# sourceMappingURL=selector.js.map