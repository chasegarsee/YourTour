import React, { useEffect } from "react"
import { connect } from "react-redux";
import { getBars } from "../../actions"
import Bars from "./Bars"

function ViewBars(props) {

    useEffect(() => { props.getBars() }, [])

    return (
        <div style={{ backgroundColor: "grey", height: "100vh" }}>

            <h1>Bars</h1>
            <div>
                {props.barData.map(r => (
                    <Bars
                        id={r.BarsId}
                        className="card"
                        draggable="true"
                        key={r.barsId}
                        info={r} />
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        barData: state.bars.barData,
        barDataStart: state.bars.getBarsStart,
        barDataSuccess: state.bars.getBarsSuccess,
        barDataFailure: state.bars.getBarsFailure,
        error: state.error
    }
}

export default connect(
    mapStateToProps, { getBars }
)(ViewBars)