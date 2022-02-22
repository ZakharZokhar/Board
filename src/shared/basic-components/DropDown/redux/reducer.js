import { addToDropDown } from "./actions";

function dropDownReducer(state = { inDropDown: '' }, action) {
    switch (action.type) {
        case addToDropDown.type:
            return {
                ...state,
                inDropDown: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
}

export default dropDownReducer;
