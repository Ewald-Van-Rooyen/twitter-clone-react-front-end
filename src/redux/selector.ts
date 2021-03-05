import {TweetsGlobalStateInterface} from "../interfaces/tweetsGlobalState";

export const getTweets = (store: TweetsGlobalStateInterface) => {
    // @ts-ignore
    return store.tweets.tweets;
};

