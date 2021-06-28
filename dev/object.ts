import { Level } from "./level.js";

export class Object {

    protected x : number;
    protected y : number;
    protected element : HTMLElement;

    constructor(tagName : string){
        this.create(tagName);
    }

    private create(tagname : string){
        const gameElement = document.querySelector("game") as HTMLElement;
        this.element = document.createElement(tagname);
        gameElement.appendChild(this.element);
    }

    public remove(){
        this.element.remove();
    }

    public update(speed : number = 0){
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    public getBoundingRectangle() : DOMRect {
        return this.element.getBoundingClientRect()
    }
}