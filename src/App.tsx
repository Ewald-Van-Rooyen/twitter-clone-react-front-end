import React, {useState} from "react";
import "./App.scss";

import LoginPage from "./pages/login/loginPage";
import FeedPage from "./pages/feedPage";

/**
 * App navigates to the login screen on default
 * After a "successful" login the Login component will call the callback that will hide the current screen
 * and display the feed page
 * @constructor
 */
const App = () => {
    const [showLoginScreen, setShowLoginScreen] = useState(true);
    const [showFeedScreen, setShowFeedScreen] = useState(false);

    const onSubmitClickCallback = () => {
        setShowLoginScreen(false);
        setShowFeedScreen(true);
    };

    const onLogoutClickCallback = () => {
        setShowLoginScreen(true);
        setShowFeedScreen(false);
    };

    return (
        <>
            {showLoginScreen && <LoginPage onSubmitClickCallback={onSubmitClickCallback}/>}
            {showFeedScreen && <FeedPage onLogoutClickCallback={onLogoutClickCallback}/>}
        </>
    );
};

export default App;
