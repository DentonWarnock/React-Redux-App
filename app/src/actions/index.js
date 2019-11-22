import axios from "axios";

export const KANYE_LOAD_START = "KANYE_LOAD_START";
export const KANYE_LOAD_SUCCESS = "KANYE_LOAD_SUCCESS";
export const KANYE_LOAD_FAILURE = "KANYE_LOAD_FAILURE";

let data = "data";

 export const getKanyeData = () => {
     return function(dispatch) {
        console.log("actions, dispatch", dispatch)
        dispatch({ type: KANYE_LOAD_START });

    axios
        .get("https://api.kanye.rest/")
        .then (res =>     
            dispatch({
            type: KANYE_LOAD_SUCCESS, 
            payload: res.data.quote
            })
        )
        .catch(err => {
            console.log(err);
            dispatch({
                type: KANYE_LOAD_FAILURE,
                payload: "error loading data"
            })
        });
     }
 }


