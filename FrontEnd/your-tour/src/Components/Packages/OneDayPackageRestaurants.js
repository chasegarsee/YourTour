import React from "react"

function OneDayPackageRestaurants(props) {

    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData("card_id", target.id)

        setTimeout(() => {
            target.style.display = "none"
        }, 0)
    }

    const dragOver = e => {
        e.stopPropagation()
    }

    return (
        <div style={{ backgroundColor: "#F3F3F3", boxSizing: "border-box", height: "100vh" }}>
            <h1>One Day Package</h1>
        </div>
    )
}

export default OneDayPackageRestaurants