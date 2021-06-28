export class Object {
    constructor(tagName) {
        this.create(tagName);
    }
    create(tagname) {
        const gameElement = document.querySelector("game");
        this.element = document.createElement(tagname);
        gameElement.appendChild(this.element);
    }
    remove() {
        this.element.remove();
    }
    update(speed = 0) {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    getBoundingRectangle() {
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=object.js.map