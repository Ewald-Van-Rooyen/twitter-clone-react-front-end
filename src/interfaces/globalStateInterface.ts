import {TweetInterface} from "./tweetInterface";
import {UserInterface} from "./userInterface";
import {UserDetailsInterface} from "./userDetailsInterface";

export enum StatusEnum {
    IDLE = "IDLE",
    LOADING = "LOADING",
    LOADED = "LOADED"
}

export interface GlobalStateInterface {
    global: StateInterface;
    tweets: TweetsGlobalStateInterface;
    user: UserGlobalStateInterface;
    userDetails: UserDetailsGlobalStateInterface
}

export interface TweetsGlobalStateInterface {
    tweets: Array<TweetInterface>
}

export interface UserGlobalStateInterface {
    activeUser: UserInterface;
    users: Array<UserInterface>;
}

export interface UserDetailsGlobalStateInterface {
    userDetails: Array<UserDetailsInterface>;
}

export interface StateInterface {
    tweetsStatus: StatusEnum;
    usersStatus: StatusEnum;
    usersDetailsStatus: StatusEnum;
}

