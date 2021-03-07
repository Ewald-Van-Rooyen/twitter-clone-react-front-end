import axios from "axios";
import {USERS_DETAILS_ACTIONS} from "../redux/actions/user-details/userDetailsConstants";
import {Dispatch} from "redux";
import {STATE_ACTIONS} from "../redux/actions/state/stateConstants";
import {StatusEnum} from "../interfaces/globalStateInterface";

class UserDetailsService {

    static async fetchUsersDetails(dispatch: Dispatch) {
        try {
            dispatch({type: STATE_ACTIONS.SET_USERS_DETAILS_STATUS, payload: StatusEnum.LOADING});
            console.info("Fetching users details");
            const {data} = await axios.get(`${process.env.REACT_APP_BASE_APIE_URL}usersDetails`);
            console.info("Fetching users details success");
            dispatch({type: USERS_DETAILS_ACTIONS.FETCH_USERS_DETAILS, payload: data});
            console.info("Setting users details state");
            dispatch({type: STATE_ACTIONS.SET_USERS_DETAILS_STATUS, payload: StatusEnum.LOADED});
        } catch (error) {
            console.info("Fetching users details failure");
            console.error(error);
            dispatch({type: STATE_ACTIONS.SET_USERS_DETAILS_STATUS, payload: StatusEnum.LOADING});
        }
    }
}

export default UserDetailsService;

