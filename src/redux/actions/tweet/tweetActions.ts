import {TweetInterface} from "../../../interfaces/tweetInterface";
import {TWEETS_ACTIONS} from "./tweetConstants";

export const addTweet = (tweet: TweetInterface) => ({
    type: TWEETS_ACTIONS.ADD_TWEET,
    payload: tweet
});

export const toggleTodo = (tweets: Array<TweetInterface>) => ({
    type: TWEETS_ACTIONS.FETCH_TWEETS,
    payload: tweets
});
