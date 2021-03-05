import {TweetsGlobalStateInterface} from "../../interfaces/tweetsGlobalState";
import {TWEETS_ACTIONS} from "../actions/tweetConstants";

const initialState: TweetsGlobalStateInterface = {
    tweets: []
};

const tweetsReducers = (state: TweetsGlobalStateInterface = initialState, action: any) => {
    switch (action.type) {
        case TWEETS_ACTIONS.FETCH_TWEETS:
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
            return state;
    }
};

export default tweetsReducers;
