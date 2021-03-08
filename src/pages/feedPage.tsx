import React, {useState} from "react";
import Capture from "../components/capture/capture";
import TweetsContainer from "../containers/tweetsContainer";
import Header from "../components/header/header";
import UserDetails from "./user-details/userDetails";

interface FeedPropsInterface {
    onLogoutClickCallback: () => void;
}

/**
 * Feed is the container component for the functionality that:
 *  Captures new tweets
 *  The tweets container that generates a multitude of tweet components
 * @constructor
 */
const FeedPage = (props: FeedPropsInterface) => {
    const [showUserContent, setShowUserContent] = useState(false);
    const [showFeedContent, setShowFeedContent] = useState(true);

    const onUserClickCallback = (): void => {
        setShowUserContent(true);
        setShowFeedContent(false);
    };

    const onHomeClickCallback = (): void => {
        setShowUserContent(false);
        setShowFeedContent(true);
    };

    const feedContent = (<>
        <Capture/>
        <TweetsContainer/>
    </>);

    return (
        <>
            <div className="container">
                <Header onHomeClickCallback={onHomeClickCallback}
                        onUserClickCallback={onUserClickCallback}
                        onLogoutClickCallback={props.onLogoutClickCallback}/>
                {showUserContent && <UserDetails/>}
                {showFeedContent && feedContent}
            </div>
        </>
    );
};

export default FeedPage;
