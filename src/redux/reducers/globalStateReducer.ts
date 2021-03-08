import {StateInterface, StatusEnum} from "../../interfaces/globalStateInterface";
import {STATE_ACTIONS} from "../actions/stateConstants";

const initialState: StateInterface = {
    tweetsStatus: StatusEnum.IDLE,
    usersStatus: StatusEnum.IDLE,
    usersDetailsStatus: StatusEnum.IDLE

};

const globalStateReducer = (state: StateInterface = initialState, action: any) => {
    switch (action.type) {
        case STATE_ACTIONS.SET_TWEETS_STATUS:
            return {
                ...state,
                tweetsStatus: action.payload
            };
        case STATE_ACTIONS.SET_USERS_STATUS:
            return {
                ...state,
                usersStatus: action.payload
            };
        case STATE_ACTIONS.SET_USERS_DETAILS_STATUS:
            return {
                ...state,
                usersDetailsStatus: action.payload
            };
        default :
            return state;
    }
};

export default globalStateReducer;
