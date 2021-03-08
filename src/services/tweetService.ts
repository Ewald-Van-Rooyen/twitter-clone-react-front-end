import axios from "axios";
import {Dispatch} from "redux";
import {TWEETS_ACTIONS} from "../redux/actions/tweetConstants";
import {TweetPostInterface, TweetPutInterface} from "../interfaces/tweetInterface";
import {STATE_ACTIONS} from "../redux/actions/stateConstants";
import {StatusEnum} from "../interfaces/globalStateInterface";

class TweetService {

    static async fetchTweets(dispatch: Dispatch) {
        try {
            dispatch({type: STATE_ACTIONS.SET_TWEETS_STATUS, payload: StatusEnum.LOADING});
            console.info("Fetching tweets");
            const {data} = await axios.get(`${process.env.REACT_APP_BASE_APIE_URL}tweets`);
            console.info("Fetching tweets success");
            dispatch({type: TWEETS_ACTIONS.FETCH_TWEETS, payload: data});
            console.info("Set tweets state");
            dispatch({type: STATE_ACTIONS.SET_TWEETS_STATUS, payload: StatusEnum.LOADED});
        } catch (error) {
            console.info("Fetching tweets failure");
            console.error(error);
            dispatch({type: STATE_ACTIONS.SET_TWEETS_STATUS, payload: StatusEnum.LOADED});
        }
    }

    static postTweet(tweet: TweetPostInterface) {
        return async function postTweetThunk(dispatch: Dispatch) {
            try {
                console.info("Posting tweet");
                console.info(tweet);
                await axios.post(`${process.env.REACT_APP_BASE_APIE_URL}tweets`, tweet);
                console.info("Posting tweet success");
                await TweetService.fetchTweets(dispatch);
            } catch (error) {
                console.info("Post tweets failure");
                console.error(error);
            }
        }
    }

    static putTweet(tweet: TweetPutInterface) {
        return async function putTweetThunk(dispatch: Dispatch) {
            try {
                console.info("Altering tweet");
                console.info(tweet);
                await axios.put(`${process.env.REACT_APP_BASE_APIE_URL}tweets/${tweet.id}`, tweet);
                console.info("Altering tweet success");
                await TweetService.fetchTweets(dispatch);
            } catch (error) {
                console.info("Altering tweets failure");
                console.error(error);
            }
        }
    }

    static deleteTweet(id: number) {
        return async function deleteTweetThunk(dispatch: Dispatch) {
            try {
                console.info("Deleting tweet");
                console.info(id);
                await axios.delete(`${process.env.REACT_APP_BASE_APIE_URL}tweets/${id}`);
                console.info("Delete tweet success");
                await TweetService.fetchTweets(dispatch);
            } catch (error) {
                console.info("Altering tweets failure");
                console.error(error);
            }
        }
    }
}

export default TweetService;
