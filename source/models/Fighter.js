import Move from "models/Move.js"

export default class Fighter {
    constructor(that) {
        this.game = that.game
        this.position = that.position
        this.velocity = {"x": 0, "y": 0}
    }
    update(delta) {
        if(this.move && this.move.isApproved && this.move.positions.length > 0) {
            let position = this.move.positions.shift()
            this.position.x = position.x
            this.position.y = position.y
            return
        }

        let power = 0.6
        let direction = Geometry.getDirection(this.position, this.game.mouse.position)
        this.move = new Move({
            "position": {
                "x": this.position.x,
                "y": this.position.y,
            },
            "velocity": {
                "x": Math.cos(direction) * power,
                "y": Math.sin(direction) * power
            }
        })
    }
}

class Geometry {
    static getDirection(a, b) {
        return Math.atan2(b.y - a.y, b.x - a.x)
    }
}
