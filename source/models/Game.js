import Keyb from "keyb"

export default class Game {
    constructor() {
        this.figther = {x: 8, y: 4.5}
    }
    update(delta) {
        this.timer -= delta.s
        if(this.timer > 0) {
            console.log(this.timer)
        }

        if(Keyb.isJustDown("W")
        || Keyb.isJustDown("<up>")) {
            this.figther.y -= 1
            this.timer = 0.2
        }
        if(Keyb.isJustDown("S")
        || Keyb.isJustDown("<down>")) {
            this.figther.y += 1
            this.timer = 0.2
        }
        if(Keyb.isJustDown("A")
        || Keyb.isJustDown("<left>")) {
            this.figther.x -= 1
            this.timer = 0.2
        }
        if(Keyb.isJustDown("D")
        || Keyb.isJustDown("<right>")) {
            this.figther.x += 1
            this.timer = 0.2
        }
        // console.log("!!!", delta)
    }
}
