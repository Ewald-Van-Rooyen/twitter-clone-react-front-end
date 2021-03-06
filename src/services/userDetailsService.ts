import axios from "axios";
import {USERS_DETAILS_ACTIONS} from "../redux/actions/user-details/userDetailsConstants";
import {Dispatch} from "redux";

class UserDetailsService {

    static async fetchUsersDetails(dispatch: Dispatch) {
        try {
            console.info("Fetching users details");
            const {data} = await axios.get(`${process.env.REACT_APP_BASE_APIE_URL}usersDetails`);
            console.info("Fetching users details success");
            dispatch({type: USERS_DETAILS_ACTIONS.FETCH_USERS_DETAILS, payload: data});
            console.info("Setting users details state");
        } catch (error) {
            console.info("Fetching users details failure");
            console.error(error);
        }
    }
}

export default UserDetailsService;

