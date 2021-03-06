import React from "react";
import {TweetInterface} from "../interfaces/tweetInterface";

import {useSelector} from "react-redux";
import {getTweets} from "../redux/selector";
import Tweet from "../components/tweet/tweet";

const TweetsContainer = () => {
    const tweets = useSelector(getTweets);

    return (
        <>
            {tweets && tweets.map((tweet: TweetInterface) => {
                return (<Tweet key={tweet.id}
                               id={tweet.id}
                               userId={tweet.userId}
                               date={tweet.date}
                               tweet={tweet.tweet}
                               claps={tweet.claps}/>);
            })}
        </>
    );
};


export default TweetsContainer;
