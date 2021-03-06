import {UserGlobalStateInterface} from "../../interfaces/globalStateInterface";
import {USER_ACTIONS} from "../actions/user/userConstants";

const initialState: UserGlobalStateInterface = {
    activeUser: {id: 0, username: "", role: "", profilePic: "", usersDetailsId: 0},
    users: []
};

const userReducer = (state: UserGlobalStateInterface = initialState, action: any) => {
    switch (action.type) {
        case USER_ACTIONS.FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case USER_ACTIONS.SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: action.payload
            };
        default :
            return state;
    }
};

export default userReducer;
