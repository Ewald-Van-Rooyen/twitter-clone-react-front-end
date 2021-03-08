import {Dispatch} from "redux";
import axios from "axios";
import {USER_ACTIONS} from "../redux/actions/userConstants";
import {STATE_ACTIONS} from "../redux/actions/stateConstants";
import {StatusEnum} from "../interfaces/globalStateInterface";

class UserService {

    static async fetchUsers(dispatch: Dispatch) {
        try {
            dispatch({type: STATE_ACTIONS.SET_USERS_STATUS, payload: StatusEnum.LOADING});
            console.info("Fetching users");
            const {data} = await axios.get(`${process.env.REACT_APP_BASE_APIE_URL}users`);
            console.info("Fetching users success");
            dispatch({type: USER_ACTIONS.FETCH_USERS, payload: data});
            console.info("Set users state");
            dispatch({type: STATE_ACTIONS.SET_USERS_STATUS, payload: StatusEnum.LOADED});
        } catch (error) {
            console.info("Fetching users failure");
            console.error(error);
            dispatch({type: STATE_ACTIONS.SET_USERS_STATUS, payload: StatusEnum.LOADED});
        }
    }
}

export default UserService;
