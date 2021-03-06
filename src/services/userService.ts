import {Dispatch} from "redux";
import axios from "axios";
import {USER_ACTIONS} from "../redux/actions/user/userConstants";

class UserService {

    static async fetchUsers(dispatch: Dispatch) {
        try {
            console.info("Fetching users");
            const {data} = await axios.get(`${process.env.REACT_APP_BASE_APIE_URL}users`);
            console.info("Fetching users success");
            dispatch({type: USER_ACTIONS.FETCH_USERS, payload: data});
            console.info("Set users state");
        } catch (error) {
            console.info("Fetching users failure");
            console.error(error);
        }
    }
}

export default UserService;
