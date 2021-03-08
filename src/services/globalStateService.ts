import {Dispatch} from "redux";
import TweetService from "./tweetService";
import UserService from "./userService";
import UserDetailsService from "./userDetailsService";
import {STATE_ACTIONS} from "../redux/actions/stateConstants";
import {StatusEnum} from "../interfaces/globalStateInterface";

class GlobalStateService {

    static async fetchEntities(dispatch: Dispatch) {

        try {
            dispatch({type: STATE_ACTIONS.SET_STATUS, payload: StatusEnum.LOADING});

            await TweetService.fetchTweets(dispatch);

            await UserService.fetchUsers(dispatch);

            await UserDetailsService.fetchUsersDetails(dispatch);

            dispatch({type: STATE_ACTIONS.SET_STATUS, payload: StatusEnum.LOADED});

        } catch (error) {
            console.info("Fetching models failure");
            console.error(error);
        }
    }
}

export default GlobalStateService;
