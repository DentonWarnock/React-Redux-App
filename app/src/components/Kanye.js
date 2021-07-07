import React from "react";
import { connect } from "react-redux";
import { getKanyeData } from "../actions";

const Kanye = props => {
    console.log("Kanye, props", props);
    

    return (
        <>
            <button onClick={() => props.getKanyeData()}>Random Kanye Quote</button>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? 
                <div className="loading">loading data...</div> 
                : 
                props.quote !== "" ?
                <div className="quote">{props.quote}</div>
                :
                null
            }
        </>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        quote: state.kanye.quote
    }
}

export default connect(mapStateToProps, { getKanyeData })(Kanye);