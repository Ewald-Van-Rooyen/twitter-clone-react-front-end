import {Dispatch} from "redux";
import axios from "axios";
import {USERS_DETAILS_ACTIONS} from "../redux/actions/user-details/userDetailsConstants";
import TweetService from "./tweetService";
import UserService from "./userService";
import UserDetailsService from "./userDetailsService";
import {STATE_ACTIONS} from "../redux/actions/state/stateConstants";
import {StatusEnum} from "../interfaces/globalStateInterface";

class StateService {
    static async fetchEntities(dispatch: Dispatch, getState: any) {

        try {
            dispatch({type: STATE_ACTIONS.SET_STATUS, payload: StatusEnum.LOADING});

            await TweetService.fetchTweets(dispatch);

            await UserService.fetchUsers(dispatch);

            await UserDetailsService.fetchUsersDetails(dispatch);

            console.log(getState());

            dispatch({type: STATE_ACTIONS.SET_STATUS, payload: StatusEnum.LOADED});

        } catch (error) {
            console.info("Fetching models failure");
            console.error(error);
        }
    }
}

export default StateService;
