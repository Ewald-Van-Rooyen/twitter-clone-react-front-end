import axios from "axios";
import {Dispatch} from "redux";
import {TWEETS_ACTIONS} from "../redux/actions/tweet/tweetConstants";

class TweetService {

    static async fetchTweets(dispatch: Dispatch) {
        try {
            console.info("Fetching tweets");
            const {data} = await axios.get(`${process.env.REACT_APP_BASE_APIE_URL}tweets`);
            console.info("Fetching tweets success");
            dispatch({type: TWEETS_ACTIONS.FETCH_TWEETS, payload: data});
            console.info("Set tweets state");
        } catch (error) {
            console.info("Fetching tweets failure");
            console.error(error);
        }
    }
}

export default TweetService;
