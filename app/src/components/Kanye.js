import React from "react";
import { connect } from "react-redux";
import {  } from "./actions";

const Kanye = props => {
    console.log("Kanye, props", props);
    return (
        <>
            <button onClick={() => props.getKanyeData()}>Random Kanye Quote</button>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? <div>loading data...</div> : <div>{props.quote}</div>}
        </>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        monster: state.monster
    }
}

export default connect(mapStateToProps, {})(Kanye);