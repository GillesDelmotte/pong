import {playerOne} from "./playerOne";
import {playerTwo} from "./playerTwo";
import {ball} from "./ball";
import {gameController} from "./gameController";
import {counter} from "./counter";
import {controller} from "./controllers";

const game = {
    'canvas' : document.querySelector('canvas'),
    'c' : null,
    'hasStarted' : false,
    'requestAnimationId' : 0,
    'playerOne': playerOne,
    'playerTwo': playerTwo,
    'ball': ball,
    'gameController': gameController,
    'counter': counter,
    'controller': controller,
    'frame' : 0,
    'maxPoint' : 10,
    'canvasWidth' : document.querySelector('.canvasWidth'),
    'canvasWidthValue' : null,
    'canvasHeight' : document.querySelector('.canvasHeight'),
    'canvasHeightValue' : null,



    init(){
        this.c = this.canvas.getContext('2d')

        this.canvasWidthValue = this.canvasWidth.value;
        this.canvasHeightValue = this.canvasHeight.value;


        this.c.fillStyle = 'white'
        this.c.fillRect(this.canvas.width/2 - 1, 0, 2, this.canvas.height)
        this.playerOne.init(this)
        this.playerTwo.init(this)
        this.ball.init(this)
        this.gameController.init(this)
        this.counter.init(this)
        this.controller.init(this)
        this.animate()
        window.addEventListener('keypress', (e)=>{
            if(e.key === ' '){
                this.hasStarted = true
            }
        })
    },

    animate() {
        this.requestAnimationId = window.requestAnimationFrame(() => {
            this.animate()
        })

        this.frame ++
        this.canvasWidthValue = this.canvasWidth.value;
        this.canvasHeightValue = this.canvasHeight.value;

        this.canvas.width = 550 + (this.canvasWidthValue * 50)
        this.canvas.height = 290 + (this.canvasHeightValue * 10)



        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.c.fillStyle = 'white'
        this.c.fillRect(this.canvas.width/2 - 1, 0, 2, this.canvas.height)
        this.playerOne.update()
        this.playerTwo.update()
        this.counter.update()
        this.controller.update()
        this.ball.update()


        if(this.counter.scorePlayerOne === this.maxPoint){
            this.c.font = "50px courier"
            this.c.fillText('playerOne win', this.canvas.width/2 -200, this.canvas.height - 250)
            document.querySelector('.new').style.display = 'block'
        }else if(this.counter.scorePlayerTwo === this.maxPoint) {
            this.c.font = "50px courier"
            this.c.fillText('playerTwo win', this.canvas.width/2 -200, this.canvas.height - 250)
            document.querySelector('.new').style.display = 'block'

        }

        if(this.counter.scorePlayerOne === this.maxPoint){
            this.cancelAnimation()

        }else if(this.counter.scorePlayerTwo === this.maxPoint){
            this.cancelAnimation()

        }

    },
    cancelAnimation(){
        window.cancelAnimationFrame(this.requestAnimationId)
    }
}

game.init();

