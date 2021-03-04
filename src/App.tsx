import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import "./App.scss";

import Tweet from "./components/tweet/tweet";
import Capture from "./components/capture/capture";


const store = createStore(reducer, middleware);

function App() {
    return (
        <Provider store={store}>
            <Capture/>
            <Tweet fullname={"Ewald Van Rooyen"} username={"@Ewald42"} profilePic={"https://avatarfiles.alphacoders.com/174/174225.jpg"} date={"2015-01-17"} tweet={"duis do in ea veniam nulla excepteur voluptate esse fugiat quis mollit occaecat Lorem adipisicing in sit ad aute occaecat"} claps={50}/>
        </Provider>
    );
}

export default App;
