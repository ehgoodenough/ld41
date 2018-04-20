import Preact from "preact"

import "views/Game.view.less"

import Frame from "views/Frame.view.js"
import Version from "views/Version.view.js"

export default function View(props) {
    return (
        <Frame>
            <Version/>
        </Frame>
    )
}

// TODO: Refactor the X and Z to be horizontal and Y to be vertical.
// TODO: Why are we offseting z/2 for the upwards transform, and not the others?
// TODO: Why is the x/y origin in the top left?
