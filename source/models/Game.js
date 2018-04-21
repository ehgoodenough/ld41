import Keyb from "keyb"

import Fighter from "models/Fighter.js"

export default class Game {
    constructor() {
        this.fighter = new Fighter({
            "position": {"x": 16, "y": 9},
            "game": this
        })

        this.mouse = {"position": {"x": 16/2, "y": 9/2}}
        document.addEventListener("mousemove", (event) => {
            let frame = document.getElementById("frame").getBoundingClientRect()
            this.mouse.position.x = (event.clientX - frame.left) / (frame.width / 16)
            this.mouse.position.y = (event.clientY - frame.top) / (frame.height / 9)
        })
        document.addEventListener("mousedown", (event) => {
            this.onMouseDown()
        })
    }
    update(delta) {
        this.fighter.update(delta)
    }
    onMouseDown() {
        if(this.fighter.move !== undefined) {
            this.fighter.move.isApproved = true
        }
    }
}

// TODO: Add a polygon map to collide against.
// ....
// TODO: Attacks.
// TODO: Turns.
// TODO: AI.
// TODO: Cards, Decks.
// TODO: Health, Win Conditions.
// TODO: Blocking.
