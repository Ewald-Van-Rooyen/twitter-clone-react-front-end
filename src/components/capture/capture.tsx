import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getActiveUser} from "../../redux/selectors";
import {UserInterface} from "../../interfaces/userInterface";

import "./capture.style.scss";
import TweetService from "../../services/tweetService";
import {TweetPostInterface} from "../../interfaces/tweetInterface";

const maxCharacterLength = 50; // 280 is the official size limitation

/**
 * Helper function to create the current date
 * in the format of yyyy-mm-dd
 */
export const getTodaysDate = (): string => {
    // TODO if used more move to utilities
    const date = new Date();
    const month = date.getUTCMonth() + 1; // getUTCMonth starts at 0
    const day = date.getUTCDate();

    const dayFormatted = day < 10 ? `0${day}` : day;
    const monthFormatted = month < 10 ? `0${month}` : month;

    const year = date.getUTCFullYear();

    return `${year}-${monthFormatted}-${dayFormatted}`;
};

/**
 * Component captures the users tweet
 * and on submit posts it to the back end
 * using the active user information
 * @constructor
 */
const Capture = () => {
    const activeUser: UserInterface = useSelector(getActiveUser);
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

            // Post tweet to BE
            dispatch(TweetService.postTweet(postTweetObject));
            // Reset current tweet
            setTweet("");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentTweetValue = event.target.value;

        // Update the tweet if it is smaller than the max permitted and exists
        if (currentTweetValue.length < maxCharacterLength
            && (currentTweetValue && (currentTweetValue.trim()).length > 0)) {
            setTweet(event.target.value);
        }
    };

    return (
        <div className="horizontal-container capture-container sticky">
            <div className="display-flex">
                <img src={`${activeUser.profilePic}`} alt="" className="avatar"/>
            </div>
            <form onSubmit={handleSubmit} className={"tweet-form"}>
                <div className="capture-input-container">
                        <textarea data-testid="captureTweet"
                                  value={tweet}
                                  onChange={handleChange}
                                  className="capture-input"
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

