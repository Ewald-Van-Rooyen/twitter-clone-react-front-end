import React, {useEffect} from "react";
import {TweetInterface} from "../interfaces/tweet";

import {useDispatch, useSelector} from "react-redux";
import {getTweets} from "../redux/selector";
import Tweet from "../components/tweet/tweet";
import axios from "axios";

const TweetsContainer = () => {
    const tweets = useSelector(getTweets);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_APIE_URL}tweets`)
            .then(result => {
                    console.log(result);
                    dispatch({
                        type: "FETCH_TWEETS",
                        payload: result.data
                    })
                }
            );
    }, [dispatch]);

    console.log(tweets);
    return (
        <>
            {tweets && tweets.map((tweet: TweetInterface) => {
                return (<Tweet key={tweet.date} fullname={"Ewald v rooyen"} username={"@Ewald42"}
                               profilePic={"https://avatarfiles.alphacoders.com/174/174225.jpg"} date={tweet.date}
                               tweet={tweet.tweet}
                               claps={tweet.claps}/>);
            })}
        </>
    );
};


export default TweetsContainer;
