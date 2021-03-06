import {combineReducers} from "redux";
import tweets from "./tweetReducer";
import user from "./userReducer";
import userDetails from "./userDetailsReducer";
import global from "./globalStateReducer";

export default combineReducers({tweets, user, userDetails, global});
