import { Game } from "./game.js";
import { Level } from "./level.js";
import { Object } from "./object.js";

export class Selector extends Object {
    
    private cars : string[] = ["Toyota", "Ferrari", "Lamborghini", "Chevrolet"];
    private chosenCar : string;
    private game : Game;
    private button : HTMLElement;

    constructor(game : Game){
        super("selector");
        this.game = game;
        this.showCars();
    }

    private showCars(){
        for(let car of this.cars){
            this.addCars(car);
        }
    }

    private addCars(car : string){
        //creates cards to show the car in
        const card = document.createElement("card");
        card.addEventListener("click", () => {
            this.chosenCar = car;
            let nextScreen = new Level(this.game, this.chosenCar);
            this.game.changeScreen(nextScreen);
            //this.select();
        });
        card.classList.add("card");

        //name of the car
        const name = document.createElement("name");
        name.innerHTML = car;
        card.appendChild(name);

        //image of the car
        const image = document.createElement("img");
        image.src = `../images/${car}.png`;
        card.appendChild(image);
        
        this.element.appendChild(card);
    }

    /*public select(){
        this.button = document.createElement("div");
        this.button.innerHTML = "Speel";
        this.button.addEventListener("click", () => {
            let nextScreen = new Level(this.game, this.chosenCar);
            this.game.changeScreen(nextScreen);
        });
        this.element.appendChild(this.button);
    }*/

}