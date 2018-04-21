import Keyb from "keyb"

export default class Game {
    constructor() {
        this.fighter = new Fighter({
            "position": {"x": 8, "y": 9}
        })

        document.addEventListener("mousedown", (event) => {
            let frame = document.getElementById("frame").getBoundingClientRect()
            let x = (event.clientX - frame.left) / (frame.width / 16)
            let y = (event.clientY - frame.top) / (frame.height / 9)

            this.fighter.onMouseDown({
                "position": {"x": x, "y": y}
            })
        })

        document.addEventListener("mousemove", (event) => {
            let frame = document.getElementById("frame").getBoundingClientRect()
            let x = (event.clientX - frame.left) / (frame.width / 16)
            let y = (event.clientY - frame.top) / (frame.height / 9)

            this.fighter.onMouseMove({
                "position": {"x": x, "y": y}
            })
        })
    }
    update(delta) {
        this.timer = this.timer || 0
        this.timer -= delta.s

        this.fighter.update(delta)
    }
}

const TIME = 30
const GRAVITY = 0.033
const FRICTION = 0.8
const MAP_HEIGHT = 9

class Move {
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

class Fighter {
    constructor(that) {
        this.position = that.position
        this.velocity = {"x": 0, "y": 0}

        this.move = new Move({
            "position": {
                "x": this.position.x,
                "y": this.position.y,
            },
            "velocity": {
                "x": 0.434,
                "y": -0.413
            }
        })
    }
    update(delta) {
        if(this.move && this.move.isApproved && this.move.positions.length > 0) {
            let position = this.move.positions.shift()
            this.position.x = position.x
            this.position.y = position.y
        }
    }
    onMouseDown(event) {
        if(this.move !== undefined) {
            this.move.isApproved = true
        }
    }
    onMouseMove(event) {
        let power = 0.6
        let direction = getDirection(this.position, event.position)

        if(this.move !== undefined && this.move.isApproved && this.move.positions.length > 0) {
            return
        }

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

        // this.velocity.x = Math.cos(direction) * power
        // this.velocity.y = Math.sin(direction) * power

        // this.velocity.x = (event.position.x - this.position.x) / 10
        // this.velocity.y = (event.position.y - this.position.y) / 10
    }
}

function getDirection(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x)
}

// TODO: Implement the click vector physics.
// TODO: Add a polygon map to collide against.
// ....
// TODO: Attacks.
// TODO: Turns.
// TODO: AI.
// TODO: Cards, Decks.
// TODO: Health, Win Conditions.
// TODO: Blocking.
