import {StateInterface, StatusEnum} from "../../interfaces/globalStateInterface";
import {STATE_ACTIONS} from "../actions/state/stateConstants";

const initialState: StateInterface = {
    status: StatusEnum.IDLE
};

const globalStateReducer = (state: StateInterface = initialState, action: any) => {
    switch (action.type) {
        case STATE_ACTIONS.SET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        default :
            return state;
    }
};

export default globalStateReducer;
