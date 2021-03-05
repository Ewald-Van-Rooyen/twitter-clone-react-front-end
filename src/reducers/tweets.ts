import {TWEETS_ACTIONS} from "../actions/tweets.constants";
import {TweetsGlobalStateInterface} from "../interfaces/tweetsGlobalState";

const initialState: TweetsGlobalStateInterface = {
    tweets: []
};

const tweets = (state: TweetsGlobalStateInterface = initialState, action: any) => {
    switch (action.type) {
        case TWEETS_ACTIONS.UPLOAD_ALL_TWEETS:
            return {
                ...state,
                tweets: action.payload
            };
        case TWEETS_ACTIONS.ADD_TWEET:
            return {
                ...state,
                tweets: [...state.tweets, action.payload]
            };
        default :
            return state
    }
};

export default tweets;
