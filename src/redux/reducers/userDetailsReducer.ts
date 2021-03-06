import {UserDetailsGlobalStateInterface} from "../../interfaces/globalStateInterface";
import {USERS_DETAILS_ACTIONS} from "../actions/user-details/userDetailsConstants";

const initialState: UserDetailsGlobalStateInterface = {
    userDetails: []
};

const userDetailsReducer = (state: UserDetailsGlobalStateInterface = initialState, action: any) => {
    // TODO change to if, if now more actions are added
    switch (action.type) {
        case USERS_DETAILS_ACTIONS.FETCH_USERS_DETAILS:
            return {
                userDetails: action.payload
            };
        default :
            return state;
    }
};

export default userDetailsReducer;
