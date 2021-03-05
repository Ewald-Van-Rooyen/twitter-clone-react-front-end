import React, {useState} from "react";
import "./App.scss";

import Login from "./pages/login/login";
import Feed from "./pages/feed";

function App() {
    const [showLoginScreen, setShowLoginScreen] = useState(true);
    const [showFeedScreen, setShowFeedScreen] = useState(false);

    const onSubmitClickCallback = () => {
        setShowLoginScreen(false);
        setShowFeedScreen(true);
    };

    return (
        <>
            {showFeedScreen && <Feed />}
            {showLoginScreen && <Login onSubmitClickCallback={onSubmitClickCallback}/>}
        </>
    );
}

export default App;
