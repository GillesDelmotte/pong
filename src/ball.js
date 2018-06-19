export const ball = {
    'x': 0,
    'y': 0,
    'r': 10,
    'game': null,
    'speedx': 0,
    'speedy': 0,


    init(game) {
        this.game = game

            this.speedy = 3 //Math.floor(Math.random() * 10 - 2)
            this.speedx = 3 //Math.floor(Math.random() * 10 - 2)


        this.x = this.game.canvas.width / 2
        this.y = this.game.canvas.height / 2

        this.game.c.beginPath()
        this.game.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true)
        this.game.c.fill()
    },

    update() {

        if(this.game.hasStarted) {

            document.querySelector('.start').style.textIndent = '-9999px'

            const multiplicateur = (this.game.frame / 150 >= 1) ? this.game.frame / 150 : 1

            if (this.game.frame > 600) {
                this.game.frame = 600
            }

            this.y -= this.speedy * multiplicateur
            this.x -= this.speedx * multiplicateur

        }else{
            this.game.frame = 0
        }


        // colision avec le palet de gauche

        if ((this.x - this.r - this.game.playerOne.width) <= this.game.playerOne.x && (this.x + this.r * 2) >= (this.game.playerOne.x + this.game.playerOne.width)) {
            if ((this.y) >= this.game.playerOne.y && this.y <= this.game.playerOne.height + this.game.playerOne.y) {

                this.speedx = this.speedx * -1


                const playerCenter = this.game.playerOne.height / 2
                const zero = this.game.playerOne.y + playerCenter
                const ballPosForPlayer = zero - this.y
                const diff = (ballPosForPlayer / this.game.playerOne.height) * -1
                this.speedy = diff * this.speedx
            }

        }


        // colision avec le palet de droite

        if ((this.x + this.r - this.game.playerTwo.width) <= this.game.playerTwo.x && (this.x + this.r * 2) >= (this.game.playerTwo.x + this.game.playerTwo.width)) {
            if ((this.y) >= this.game.playerTwo.y && this.y <= this.game.playerTwo.height + this.game.playerTwo.y) {
                this.speedx = this.speedx * -1

                const playerCenter = this.game.playerTwo.height / 2
                const zero = this.game.playerTwo.y + playerCenter
                const ballPosForPlayer = zero - this.y
                const diff = ballPosForPlayer / this.game.playerTwo.height

                this.speedy = diff * this.speedx

            }

        }

        // colission bord sup/inf

        if (this.y - this.r < 0) {
            this.speedy = this.speedy * -1
        }

        if (this.y + this.r > this.game.canvas.height) {
            this.speedy = this.speedy * -1
        }

        // comptage des points

        if (this.x <= -25) {
            this.game.counter.scorePlayerTwo += 1
            this.x = this.game.canvas.width / 2
            this.game.frame = 1



        }
        if (this.x >= this.game.canvas.width + 25) {
            this.game.counter.scorePlayerOne += 1
            this.x = this.game.canvas.width / 2
            this.game.frame = 1


        }


        this.game.c.beginPath()
        this.game.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true)
        this.game.c.fill()
    }
}