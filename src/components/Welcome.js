import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Pardeep sahu"
        }
    }

    changeValue = () => {
        this.setState({
            name: "How are you Pardeep Sahu"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeValue}>Subscribe</button>
            </div>
        )
    }
}
export default Welcome