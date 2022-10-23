import React, { Component } from "react";

class RightSide extends Component {
    render() {
        return (
            <div className="right-side">
                {this.props.children}
            </div>
        );
    }
}

export default React.memo(RightSide);