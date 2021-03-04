/*
import { ThunkAction } from "redux-thunk";
import {TweetInterface} from "../interfaces/tweet";

import {TWEETS_ACTIONS} from "./tweets.constants";

const addTweet = (tweet:TweetInterface) => {
  return {
    type: TWEETS_ACTIONS.ADD_TWEET,
    tweet,
  }
};

export function handleAddTweet () {

  return (dispatch, getState):Action  => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveTweets (tweets) {
  return {
    type: TWEETS_ACTIONS.GET_TWEETS,
    tweets,
  }
}
// Action Creator
function toggleTweet ({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}
// Asynchronous action creator is responsible for invoking the saveLikeToggle() api call.
export function handleToggleTweet (info) {
  // return a function so we can dispatch whenever we like
  return (dispatch) => {
    // We are using optomistic updates by calling the dispatch before the API call.
    dispatch(toggleTweet(info))

    // THE API CALL
    return saveLikeToggle(info)
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e)
        dispatch(toggleTweet(info))
        alert('There was an error liking the tweet. Try again.')
      })
  }
}
*/

export {};
