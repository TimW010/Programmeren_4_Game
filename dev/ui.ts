import { Game } from "./game.js";
import { Menu } from "./menu.js";
import { Object } from "./object.js";
window.localStorage;
export class UI extends Object{

    private scoreDiv : HTMLElement;
    //private timerDiv : HTMLElement;
    private highScoreDiv : HTMLElement;
    private pauseButton : HTMLElement;
    
    //private timer : number = 0;
    private score : number = 0;
    private highScore : number;

    private game : Game;

    constructor(game : Game){
        super("ui");
        this.game = game;
        //create score
        this.scoreDiv = document.createElement("score");
        this.element.appendChild(this.scoreDiv);
        //create timer
        //this.timerDiv = document.createElement("timer");
        //this.element.appendChild(this.timerDiv);
        //create highScore
        this.highScoreDiv =  document.createElement("highScore");
        this.element.appendChild(this.highScoreDiv);
        //create pauseButton
        this.pauseButton = document.createElement("pauseButton");
        this.pauseButton.innerHTML = "Pause";
        this.pauseButton.addEventListener("click", (e : MouseEvent) => this.pause(e));
        this.element.appendChild(this.pauseButton);
        if(localStorage.getItem("highScore") !== null ){
            this.highScore = parseInt(localStorage.getItem("highScore")!);
        } else {
            this.highScore = 0;
        }
    }

    private pause(e : MouseEvent){
        this.game.pause = !this.game.pause;
        if(this.game.pause){
            this.pauseButton.innerHTML = "Play";
        } else {
            this.pauseButton.innerHTML = "Pause";
        }
    }

    public update() {
        //updates the score
        const scoreToString = `Score : ${this.score}`;
        this.scoreDiv.innerHTML = scoreToString;
        //updates the highScore
        const highScoreToString = `High Score : ${this.highScore}`;
        this.highScoreDiv.innerHTML = highScoreToString;
        //when the current score > the High Score, High Score will be updated.
        if(this.score > this.highScore){
            this.highScore = this.score
        }
        this.score++;
    }

    public saveScore(){
        //saves the highscore
        if(this.score > this.highScore){
            this.highScore = this.score
            localStorage.setItem("highScore", JSON.stringify(this.highScore));
        }
        this.element.remove();
    }

}