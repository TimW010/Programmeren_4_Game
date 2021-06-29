import { Object } from "./object.js";
export class UI extends Object {
    constructor() {
        super("ui");
        this.timer = 0;
        this.score = 0;
        this.highScore = 500;
        this.scoreDiv = document.createElement("score");
        this.element.appendChild(this.scoreDiv);
        this.timerDiv = document.createElement("timer");
        this.element.appendChild(this.timerDiv);
        this.highScoreDiv = document.createElement("highScore");
        this.element.appendChild(this.highScoreDiv);
    }
    update() {
        const scoreToString = `Score : ${this.score}`;
        this.scoreDiv.innerHTML = scoreToString;
        const highScoreToString = `High Score : ${this.highScore}`;
        this.highScoreDiv.innerHTML = highScoreToString;
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
        this.score++;
    }
    saveScore() {
    }
}
//# sourceMappingURL=ui.js.map