import Preact from "preact"
import Yaafloop from "yaafloop"
import Statgrab from "statgrab/do"

import Game from "models/Game.js"
import GameView from "views/Game.view.js"

import "vendor/FullStory.js"
import "vendor/GoogleAnalytics.js"

let game = new Game()

let mount = Preact.render(<GameView/>, document.body)
let loop = new Yaafloop((delta) => {
    game.update(delta)
    Preact.render(<GameView/>, document.body, mount)
})
