import { Object } from "./object.js";
export class Background extends Object{

    private backgroundPos = 0;

    constructor(){
        super('background')
    }

    public update(speed : number) {
        this.backgroundPos+= (speed * 2)
        this.element.style.backgroundPosition = `0px ${this.backgroundPos}px`;
    }

}