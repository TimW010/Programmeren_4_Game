import { Object } from "./object.js";
export class Background extends Object {
    constructor() {
        super('background');
        this.backgroundPos = 0;
    }
    update(speed) {
        this.backgroundPos += (speed * 2);
        this.element.style.backgroundPosition = `0px ${this.backgroundPos}px`;
    }
}
//# sourceMappingURL=background.js.map