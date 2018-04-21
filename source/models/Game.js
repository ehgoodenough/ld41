import Keyb from "keyb"

export default class Game {
    constructor() {
        this.fighter = new Fighter({
            "position": {"x": 8, "y": 0}
        })
    }
    update(delta) {
        this.timer = this.timer || 0
        this.timer -= delta.s

        this.fighter.update(delta)
    }
}

const GRAVITY = 0.033
const MAP_HEIGHT = 9

class Fighter {
    constructor(that) {
        this.position = that.position
        this.velocity = {"x": 0, "y": 0}
    }
    update(delta) {
        if(Keyb.isJustDown("<space>", delta.ms)) {
            this.velocity.y = -0.5
            // this.position.y = 0
            // this.velocity.y = 0
        }

        if(this.position.y + this.velocity.y >= MAP_HEIGHT) {
            this.position.y = MAP_HEIGHT
            this.velocity.y = 0
        }

        console.log(this.velocity.y)

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.velocity.y += GRAVITY
    }
}

// TODO: Implement the click vector physics.
// TODO: Add a polygon map to collide against.

// TODO: Attacks.
// TODO: Turns.
// TODO: AI.
// TODO: Cards, Decks.
// TODO: Health, Win Conditions.
// TODO: Blocking.
