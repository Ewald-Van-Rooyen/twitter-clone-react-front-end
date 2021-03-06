import React, {useEffect, useState} from "react";
import "./capture.style.scss";
import {useSelector} from "react-redux";
import {getUser} from "../../redux/selector";
import {UserInterface} from "../../interfaces/userInterface";

const maxCharacterLength = 280;

const Capture = () => {
    const activeUser: UserInterface = useSelector(getUser);
    const [tweet, setTweet] = useState("");

    const handleSubmit = (event: React.SyntheticEvent) => {
        if (event) {
            event.preventDefault();
        }
        // Call global state here
        if (tweet) {
            console.log(tweet);
            setTweet("");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentTweetValue = event.target.value;

        if (currentTweetValue.length < maxCharacterLength) {
            setTweet(event.target.value);
        }

    };

    return (<div className="container">

        <div className="horizontal-container">
            <img src={`${activeUser.profilePic}`} alt="" className="avatar"/>
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

    </div>);
};

export default Capture;

