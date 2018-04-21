import Preact from "preact"

import "views/Game.view.less"

import Frame from "views/Frame.view.js"
import Camera from "views/Camera.view.js"
import Version from "views/Version.view.js"
import Fighter from "views/Fighter.view.js"
import Move from "views/Move.view.js"

export default class Game {
    render() {
        return (
            <Frame>
                <Version/>
                <Move move={this.props.game.fighter.move}/>
                <Camera game={this.props.game}>
                    <Fighter fighter={this.props.game.fighter}/>
                </Camera>
            </Frame>
        )
    }
}
