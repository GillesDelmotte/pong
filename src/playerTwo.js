export const playerTwo = {
    'x' : 20,
    'y' : 100,
    'width' : 15,
    'height' : 75,
    'game' : null,
    'speed' : 5,


    init(game) {
        this.game = game

        this.x = this.game.canvas.width - this.width - 20
        this.y = this.game.canvas.height/2 - this.height/2

        this.game.c.fillStyle = 'white'
        this.game.c.fillRect(this.x, this.y, this.width, this.height);


    },

    update(){


        this.x = this.game.canvas.width - this.width - 20

        if(this.game.gameController.activeKeys.includes('p')){
            if(this.y <= 0){
                this.y = 0
            }else{
                this.y = this.y - this.speed
            }
        }

        if(this.game.gameController.activeKeys.includes('m')){
            if(this.y + this.height >= this.game.canvas.height){
                this.y = this.game.canvas.height - this.height
            }else{
                this.y = this.y + this.speed
            }
        }


        this.game.c.fillStyle = 'white'
        this.game.c.fillRect(this.x, this.y, this.width, this.height);

    }
}