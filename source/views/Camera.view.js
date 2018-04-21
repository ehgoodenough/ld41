import Preact from "preact"

import "views/Camera.view.less"

export default class Camera {
    render() {
        return (
            <div className={"Camera"} style={this.style}>
                {this.props.children}
            </div>
        )
    }
    get style() {
        return {
            position: "absolute"
        }
    }
}
