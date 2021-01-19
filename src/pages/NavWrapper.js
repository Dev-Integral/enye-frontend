
import React, { Component } from "react";

class NavWrapper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>

        )
    }
}
export default NavWrapper;