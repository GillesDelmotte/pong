export const counter = {
    'scorePlayerOne': 0,
    'scorePlayerTwo': 0,
    'game': null,

    init(game){
        this.game = game
        this.game.c.font = "100px courier"
        this.game.c.fillText(this.scorePlayerTwo, this.game.canvas.width - 200, this.game.canvas.height/2)
        this.game.c.fillText(this.scorePlayerOne, 150, this.game.canvas.height/2)
    },

    update(){

        this.game.c.font = "100px courier"
        this.game.c.fillText(this.scorePlayerTwo, this.game.canvas.width - 200, this.game.canvas.height/2)
        this.game.c.fillText(this.scorePlayerOne, 150, this.game.canvas.height/2)

    }
}