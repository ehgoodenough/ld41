import Preact from "preact"

import "views/Move.view.less"

const SCALE = 4

export default class Move {
    render() {
        if(this.props.move === undefined) {
            return (
                <div/>
            )
        } else {
            return (
                <svg className="Move" viewBox={`0 0 ${16 * SCALE} ${9 * SCALE}`}>
                    <polyline className="Line" fill="none" stroke="black" points={this.points}/>
                </svg>
            )
        }
    }
    get points() {
        return this.props.move.positions.map((position) => {
            return (position.x * SCALE) + "," + (position.y * SCALE)
        }).join(" ")
    }
}

// class Level extends React.Component {
//     render() {
//         return (
//             <polygon fill={this.fill} points={this.points}/>
//         )
//     }
//     get fill() {
//         return this.props.level.color || "#444"
//     }
//     get points() {
//         var points = this.props.level.points.concat([
//             {x: this.props.frame.width, y: this.props.frame.height},
//             {x: 0, y: this.props.frame.height}
//         ])
//
//         return points.map((point) => {
//             return point.x + "," + point.y
//         }).join(" ")
//     }
// }
//
