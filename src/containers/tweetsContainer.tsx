import React, {useEffect, useRef, useState} from "react";
import {TweetInterface} from "../interfaces/tweetInterface";

import {useDispatch, useSelector} from "react-redux";
import {getTweets, getTweetsStatus, getUsersDetailsStatus, getUsersStatus} from "../redux/selectors";
import Tweet from "../components/tweet/tweet";
import {StatusEnum} from "../interfaces/globalStateInterface";
import TweetService from "../services/tweetService";
import UserService from "../services/userService";
import UserDetailsService from "../services/userDetailsService";
import Loader from "../components/loader/loader";

// Amount of tweets loaded/displayed at a time
// TODO move to own component for any large volumes
const tweetsPerPage = 5;

/**
 * Generates the users tweet feed
 * from the back end information of users,tweets and usersDetails
 * Initially loads data on componentDidMount
 * @constructor
 */
const TweetsContainer = () => {
    const [page, setPage] = useState(1);

    const tweets = useSelector(getTweets);

    const tweetsStatus: StatusEnum = useSelector(getTweetsStatus);
    const usersStatus: StatusEnum = useSelector(getUsersStatus);
    const usersDetailsStatus: StatusEnum = useSelector(getUsersDetailsStatus);

    const dispatch = useDispatch();

    const indexOfLastTweet = page * tweetsPerPage;
    const currentPageTweets = tweets.slice(0, indexOfLastTweet);

    // Increases the amount of tweets being displayed on page scroll down
    const handleScroll = (event: React.UIEvent<HTMLElement>) => {
        const bottom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight;
        if (bottom) {
            const nextPage = page + 1;
            setPage(nextPage);
        }
    };

    const currentPageTweetsElements = currentPageTweets.map((tweet: TweetInterface) => {
        return (<Tweet key={`${tweet.id}${tweet.userId}`}
                       id={tweet.id}
                       userId={tweet.userId}
                       date={tweet.date}
                       tweet={tweet.tweet}
                       claps={tweet.claps}/>);
    });

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
            {shouldShowFeed() && (
                <div className="tweets-container" onScroll={handleScroll}>
                    {currentPageTweetsElements}
                </div>)}
            {!shouldShowFeed() && <Loader/>}
        </>
    );
};


export default TweetsContainer;
