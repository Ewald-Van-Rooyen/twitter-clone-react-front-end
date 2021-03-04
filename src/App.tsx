import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import './App.scss';
import Feed from "./page/feed/feed";


const store = createStore(reducer, middleware);

function App() {
    return (
        <Provider store={store}>
           <Feed/>
        </Provider>
    );
}

export default App;
