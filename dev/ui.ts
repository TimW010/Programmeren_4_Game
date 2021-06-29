import { Object } from "./object.js";

export class UI extends Object{

    private scoreDiv : HTMLElement;
    private timerDiv : HTMLElement;
    private highScoreDiv : HTMLElement;

    private timer : number = 0;
    private score : number = 0;
    private highScore : number = 500; // must be updated by localstorage

    constructor(){
        super("ui");
        //create score
        this.scoreDiv = document.createElement("score");
        this.element.appendChild(this.scoreDiv);
        //create timer
        this.timerDiv = document.createElement("timer");
        this.element.appendChild(this.timerDiv);
        //create highScore
        this.highScoreDiv =  document.createElement("highScore");
        this.element.appendChild(this.highScoreDiv);
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
        //must be added to the localstorage
    }

}