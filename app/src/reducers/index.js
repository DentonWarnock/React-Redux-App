import { KANYE_LOAD_START, KANYE_LOAD_SUCCESS, KANYE_LOAD_FAILURE } from "../actions";

const initialState = {
    isLoading: false,
    error: "",
    kanye: { quote: "" }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case KANYE_LOAD_START: 
            return {
                ...state,
                isLoading: true
            };
        case KANYE_LOAD_SUCCESS: 
        return {
            ...state,
            isLoading: false,
            kanye: { quote: action.payload}
        }
        case KANYE_LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }   
};

export default reducer;