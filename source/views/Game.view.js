import Preact from "preact"

import "views/Game.view.less"

import Frame from "views/Frame.view.js"
import Version from "views/Version.view.js"
import Fighter from "views/Fighter.view.js"

export default class Game {
    render() {
        return (
            <Frame>
                <Version/>
                <Camera game={this.props.game}>
                    <Fighter figther={this.props.game.figther}/>
                </Camera>
            </Frame>
        )
    }
}

import "views/Camera.view.less"

class Camera {
    render() {
        return (
            <div className={this.className} style={this.style}>
                {this.props.children}
            </div>
        )
    }
    get className() {
        return [
            "Camera",
            // this.props.game.timer <= 0 ? "SlowDown" : ""
        ].join(" ")
    }
    get style() {
        return {
            position: "absolute"
        }
    }
}
