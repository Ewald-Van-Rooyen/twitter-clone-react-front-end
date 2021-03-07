import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../redux/selector";
import {UserInterface} from "../../interfaces/userInterface";

import "./capture.style.scss";
import TweetService from "../../services/tweetService";
import {TweetPostInterface} from "../../interfaces/tweetInterface";

const maxCharacterLength = 280;

/**
 * Helper function to create the current date
 * in the format of yyyy-mm-dd
 */
const getTodaysDate = (): string => {
    // TODO if used more move to utilities
    const date = new Date();
    const month = date.getUTCMonth() + 1; // getUTCMonth starts at 0
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${year}-${month}-${day}`;
};


/**
 * Component captures the users tweet
 * and on submit posts it to the back end
 * using the active user information
 * @constructor
 */
const Capture = () => {
    const activeUser: UserInterface = useSelector(getUser);
    const [tweet, setTweet] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.SyntheticEvent) => {
        if (event) {
            event.preventDefault();
        }

        if (tweet) {
            const postTweetObject: TweetPostInterface = {
                tweet: tweet,
                claps: 0,
                date: getTodaysDate(),
                userId: activeUser.id
            };

            dispatch(TweetService.postTweet(postTweetObject));
            setTweet("");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentTweetValue = event.target.value;

        if (currentTweetValue.length < maxCharacterLength) {
            setTweet(event.target.value);
        }
    };

    return (
        <div className="horizontal-container">
            <div className="display-flex">
                <img src={`${activeUser.profilePic}`} alt="" className="avatar"/>
            </div>
            <form onSubmit={handleSubmit} className={"tweet-form"}>
                <div className="capture-input-container">
                        <textarea value={tweet} onChange={handleChange} className="capture-input"
                                  placeholder="What's happening?"/>
                </div>
                <div className="tweet-button-container">
                    <button type="submit" className="tweet-button twitter-blue-background"><span
                        className="text">Tweet</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Capture;

