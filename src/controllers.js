export const controller ={
    'h' : null,
    'fontSize' : '50px',
    'game': null,

    init(game){
        this.game = game
        this.h = this.game.canvas.height - 50

        this.game.c.font = `${this.fontSize} courier`
        this.game.c.fillText('P&M', this.game.canvas.width - 200, this.h)
        this.game.c.fillText('A&Q', 150, this.h)
    },

    update(){
        if(!this.game.hasStarted){

            this.game.c.font = `${this.fontSize} courier`
            this.game.c.fillText('P&M', this.game.canvas.width - 190, this.h)
            this.game.c.fillText('A&Q', 100, this.h)

        }
    }
}