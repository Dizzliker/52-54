import React, { Component } from "react";

class LeftSide extends Component {
    render() {
        return (
            <div className="left-side">
                <span className="left-side__52">52</span>
                <img src="/images/whale.png" className="logo" alt="Whale logo" />
                <span className="left-side__54">54</span>
            </div>
        );
    }
}

export default React.memo(LeftSide);