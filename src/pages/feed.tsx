import React from "react";
import Capture from "../components/capture/capture";
import TweetsContainer from "../containers/tweetsContainer";
import Header from "../components/header/header";

interface FeedPropsInterface {
    onLogoutClickCallback: () => void;
}

/**
 * Feed is the container component for the functionality that:
 *  Captures new tweets
 *  The tweets container that generates a multitude of tweet components
 * @constructor
 */
const Feed = (props: FeedPropsInterface) => {

    return (
        <>
            <div className="container">
                <Header logoutClickCallback={props.onLogoutClickCallback}/>
                <Capture/>
                <TweetsContainer/>
            </div>
        </>
    );
};

export default Feed;
