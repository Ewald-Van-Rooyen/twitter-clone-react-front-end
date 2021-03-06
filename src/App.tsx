import React, {useState} from "react";
import "./App.scss";

import Login from "./pages/login/login";
import Feed from "./pages/feed";

/**
 * App navigates to the login screen on default
 * After a "successful" login the Login component will call the callback that will hide the current screen
 * and display the feed page
 * @constructor
 */
function App() {
    const [showLoginScreen, setShowLoginScreen] = useState(true);
    const [showFeedScreen, setShowFeedScreen] = useState(false);

    // TODO Add logout functionality
    const onSubmitClickCallback = () => {
        setShowLoginScreen(false);
        setShowFeedScreen(true);
    };

    return (
        <>
            {showFeedScreen && <Feed/>}
            {showLoginScreen && <Login onSubmitClickCallback={onSubmitClickCallback}/>}
        </>
    );
}

export default App;
