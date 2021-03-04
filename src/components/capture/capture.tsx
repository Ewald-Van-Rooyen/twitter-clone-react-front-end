import React, {useState} from "react";
import "./capture.style.scss";

interface CapturePropsInterface {
    profilePic?: string;
}

const Capture = ({profilePic = "https://avatarfiles.alphacoders.com/174/174225.jpg"}: CapturePropsInterface) => {
    const [tweet, setTweet] = useState("");

    return (<div className="container">

        <div className="horizontal-container">
            <img src={`${profilePic}`} alt="" className="avatar"/>
            <div className="capture-input-container">
                <textarea className="capture-input" placeholder="What's happening?"/>
            </div>
            <div className="tweet-button-container">
                <button className="tweet-button twitter-blue-background"><span className="text">Tweet</span></button>
            </div>
        </div>

    </div>);
};

export default Capture;

