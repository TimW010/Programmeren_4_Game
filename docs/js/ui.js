import { Object } from "./object.js";
window.localStorage;
export class UI extends Object {
    constructor(game) {
        super("ui");
        this.score = 0;
        this.game = game;
        this.scoreDiv = document.createElement("score");
        this.element.appendChild(this.scoreDiv);
        this.highScoreDiv = document.createElement("highScore");
        this.element.appendChild(this.highScoreDiv);
        this.pauseButton = document.createElement("pauseButton");
        this.pauseButton.innerHTML = "Pause";
        this.pauseButton.addEventListener("click", (e) => this.pause(e));
        this.element.appendChild(this.pauseButton);
        if (localStorage.getItem("highScore") !== null) {
            this.highScore = parseInt(localStorage.getItem("highScore"));
        }
        else {
            this.highScore = 0;
        }
    }
    pause(e) {
        this.game.pause = !this.game.pause;
        if (this.game.pause) {
            this.pauseButton.innerHTML = "Play";
        }
        else {
            this.pauseButton.innerHTML = "Pause";
        }
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
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem("highScore", JSON.stringify(this.highScore));
        }
        this.element.remove();
    }
}
//# sourceMappingURL=ui.js.map