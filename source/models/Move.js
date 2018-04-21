const TIME = 60
const GRAVITY = 0.033
const FRICTION = 0.8
const MAP_HEIGHT = 9

export default class Move {
    constructor(that) {
        this.position = that.position
        this.velocity = that.velocity

        this.positions = [
            {
                "x": this.position.x,
                "y": this.position.y
            }
        ]

        for(let i = 0; i < TIME; i += 1) {
            if(this.position.y + this.velocity.y >= MAP_HEIGHT) {
                this.position.y = MAP_HEIGHT
                this.velocity.y = 0
            }

            this.position.x += this.velocity.x
            this.position.y += this.velocity.y


            this.velocity.y += GRAVITY
            this.velocity.x *= (this.position.y == MAP_HEIGHT) ? FRICTION : 1

            this.positions.push({
                "x": this.position.x,
                "y": this.position.y
            })
        }
    }
}
