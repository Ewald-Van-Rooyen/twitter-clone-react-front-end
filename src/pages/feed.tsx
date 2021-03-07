import React from "react";
import Capture from "../components/capture/capture";
import TweetsContainer from "../containers/tweetsContainer";

/**
 * Feed is the container component for the functionality that:
 *  Captures new tweets
 *  The tweets container that generates a multitude of tweet components
 * @constructor
 */
const Feed = () => {

    return (
        <>
            <Capture/>
            <TweetsContainer/>
        </>
    );
};

export default Feed;
