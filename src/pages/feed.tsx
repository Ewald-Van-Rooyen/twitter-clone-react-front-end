import React, {useEffect} from "react";
import Capture from "../components/capture/capture";

import {useDispatch, useSelector} from "react-redux";
import {GlobalStateInterface, StateInterface, StatusEnum} from "../interfaces/globalStateInterface";
import StateService from "../services/stateService";
import Tweet from "../components/tweet/tweet";
import TweetsContainer from "../containers/tweetsContainer";

/**
 * Feed is the container component for the functionality that:
 *  Captures new tweets
 *  The tweets container that generates a multitude of tweet components
 * @constructor
 */
const Feed = () => {
    const dispatch = useDispatch();

    const status: StatusEnum = useSelector((state: GlobalStateInterface) => {
        return state.global.status;
    });

    useEffect(() => {
        if (status === StatusEnum.IDLE) {
            dispatch(StateService.fetchEntities);
        }
    }, [dispatch]);

    return (
        <>
            {status === StatusEnum.LOADED && <Capture/>}
            {status === StatusEnum.LOADED && <TweetsContainer/>}
        </>
    );
};

export default Feed;
