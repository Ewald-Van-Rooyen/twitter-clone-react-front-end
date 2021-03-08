import React, {useEffect} from "react";
import {TweetInterface} from "../interfaces/tweetInterface";

import {useDispatch, useSelector} from "react-redux";
import {getTweets, getTweetsStatus, getUsersDetailsStatus, getUsersStatus} from "../redux/selectors";
import Tweet from "../components/tweet/tweet";
import {StatusEnum} from "../interfaces/globalStateInterface";
import TweetService from "../services/tweetService";
import UserService from "../services/userService";
import UserDetailsService from "../services/userDetailsService";
import Loader from "../components/loader/loader";

/**
 * Generates the users tweet feed
 * from the back end information of users,tweets and usersDetails
 * Initially loads data on componentDidMount
 * @constructor
 */
const TweetsContainer = () => {
    const tweets = useSelector(getTweets);
    debugger;
    const tweetsStatus: StatusEnum = useSelector(getTweetsStatus);
    const usersStatus: StatusEnum = useSelector(getUsersStatus);
    const usersDetailsStatus: StatusEnum = useSelector(getUsersDetailsStatus);

    const dispatch = useDispatch();

    /**
     * Tweets requires all three models to construct a Tweet component
     * This function ensures all the models have been loaded using
     * the global loading states of them
     */
    const shouldShowFeed = (): boolean => {
        return tweetsStatus === StatusEnum.LOADED &&
            usersStatus === StatusEnum.LOADED &&
            usersDetailsStatus === StatusEnum.LOADED;

    };

    // Loads content from the Back End
    useEffect(() => {
        if (tweetsStatus === StatusEnum.IDLE) {
            dispatch(TweetService.fetchTweets);
        }

        if (usersStatus === StatusEnum.IDLE) {
            dispatch(UserService.fetchUsers);
        }

        if (usersDetailsStatus === StatusEnum.IDLE) {
            dispatch(UserDetailsService.fetchUsersDetails);
        }
    }, []);

    // Hides the tweets if their information is still being loaded
    return (
        <>
            {shouldShowFeed() && tweets && tweets.map((tweet: TweetInterface) => {
                return (<Tweet key={`${tweet.id}${tweet.userId}`}
                               id={tweet.id}
                               userId={tweet.userId}
                               date={tweet.date}
                               tweet={tweet.tweet}
                               claps={tweet.claps}/>);
            })}
            {!shouldShowFeed() && <Loader/>}
        </>
    );
};


export default TweetsContainer;
