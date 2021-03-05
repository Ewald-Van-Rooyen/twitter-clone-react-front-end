import {TWEETS_ACTIONS} from "./tweets.constants";
import {TweetInterface} from "../interfaces/tweet";

export const getAllTweets = () => {
    return (dispatch: any) => {
        return dispatch({
            type: TWEETS_ACTIONS.UPLOAD_ALL_TWEETS
        });
    }
};

export const addTweet = (tweet: TweetInterface) => {
    return (dispatch: any) => {
        return dispatch({
            type: TWEETS_ACTIONS.ADD_TWEET,
            payload: tweet
        });
    }
};
