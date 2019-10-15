import React, { Component } from "react"

export default class Restaurants extends Component {

    render() {
        console.log("PROPS", this.props.item)
        return (
            < div >
                <h1>{this.props.item.name}</h1>
            </div >
        )
    }
}