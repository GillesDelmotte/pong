export const gameController = {

    'activeKeys': [],
    'game': null,


    init(game) {

        this.game = game

        window.addEventListener('keydown', (e) => {
            if(!this.activeKeys.includes(e.key))
                this.activeKeys.push(e.key)
        })
        window.addEventListener('keyup', (e) => {
                this.activeKeys.splice(this.activeKeys.indexOf(e.key), 1)
        })

        window.addEventListener('onChange', (e) =>{
            if(e.target === this.game.canvasWidth){
                this.game.canvasWidthValue = this.game.canvasWidth.value

            }
            this.game.ball.x = this.game.canvas.width / 2
            this.game.ball.y = this.game.canvas.height / 2

            if(e.target === this.game.canvasHeight){
                this.game.canvasHeightValue = this.game.canvasHeight.value

            }

        })

    }
}