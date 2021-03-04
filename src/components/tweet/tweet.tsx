import React from "react";
import {TweetPropsInterfaces} from "./tweetInterfaces";
import "./tweet.style.scss";

const Tweet = (props: TweetPropsInterfaces) => {
    return (
        <div className="container">
            <div className="horizontal-container">
                <img src={`${props.profilePic}`} alt="" className="avatar"/>
                <div className="tweet-header-info">
                    {props.fullname}
                    <span>{props.username}</span>
                    <span>{props.date}</span>
                    <p> {props.tweet}</p>
                </div>
            </div>
            <div className="tweet-icons">
                <div className="likes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    <div className="likes-count">
                        {props.claps}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tweet;
