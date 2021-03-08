import {GlobalStateInterface, StatusEnum} from "../interfaces/globalStateInterface";
import {UserInterface} from "../interfaces/userInterface";
import {TweetInterface} from "../interfaces/tweetInterface";
import {UserDetailInterface} from "../interfaces/userDetailInterface";

export const getTweets = (store: GlobalStateInterface): Array<TweetInterface> => {
    return store.tweets.tweets;
};

export const getActiveUser = (store: GlobalStateInterface): UserInterface => {
    return store.user.activeUser;
};

export const getUserById = (store: GlobalStateInterface, id: number): UserInterface => {

    return store.user.users.filter((user) => {
        return user.id === id;
    })[0];
};

export const getUserDetailsById = (store: GlobalStateInterface, id: number): UserDetailInterface => {
    return store.userDetails.userDetails.filter((detail) => {
        return detail.id === id;
    })[0];
};

export const getTweetsStatus = (state: GlobalStateInterface): StatusEnum => {
    return state.global.tweetsStatus;
};

export const getUsersStatus = (state: GlobalStateInterface): StatusEnum => {
    return state.global.usersStatus;
};

export const getUsersDetailsStatus = (state: GlobalStateInterface): StatusEnum => {
    return state.global.usersDetailsStatus;
};

