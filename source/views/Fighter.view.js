import Preact from "preact"

import "views/Fighter.view.less"

export default class Fighter {
    render() {
        return (
            <div className="Fighter" style={this.style}>
                <div className="Body"/>
            </div>
        )
    }
    get style() {
        return {
            "top": this.props.fighter.position.y + "em",
            "left": this.props.fighter.position.x + "em",
        }
    }
}
