import React, {useState} from "react";

import "./userDetails.styles.scss";
import Details from "../../components/details/details";
import {useSelector} from "react-redux";
import {getActiveUser, getTweets, getUserDetailsById} from "../../redux/selectors";
import {GlobalStateInterface} from "../../interfaces/globalStateInterface";
import Tweet from "../../components/tweet/tweet";

const tweetsPerPage = 5;

const isTweetLastTenDays = (tweetDateString: string) => {
    const tweetDate = Date.parse(tweetDateString);
    const currentDate = new Date().getTime();
    const days = 10;
    const lastDate = new Date(currentDate - (days * 24 * 60 * 60 * 1000)).getTime();

    return tweetDate < currentDate && tweetDate > lastDate;
};

const UserDetails = () => {
    const [page, setPage] = useState(1);
    const activeUser = useSelector(getActiveUser);
    const activeUserDetails = useSelector((state: GlobalStateInterface) => getUserDetailsById(state, activeUser.id));
    const tweets = useSelector(getTweets);

    let tweetsPerDay = 0;

    // A lot of expensive calculations happening here
    // TODO Move out
    const filteredTweetsByUserId = tweets.filter((tweet) => {
        return tweet.userId === activeUser.id;
    });

    const tweetsElements = filteredTweetsByUserId.map((tweet) => {
        if (isTweetLastTenDays(tweet.date)) tweetsPerDay++;

        return <Tweet key={`${tweet.id}${activeUser.username}`}
                      id={tweet.id}
                      tweet={tweet.tweet}
                      claps={tweet.claps}
                      date={tweet.date} userId={tweet.userId}/>
    });

    const indexOfLastTweet = page * tweetsPerPage;
    const currentPageTweets = tweetsElements.slice(0, indexOfLastTweet);

    // Increases the amount of tweets being displayed on page scroll down
    const handleScroll = (event: React.UIEvent<HTMLElement>) => {
        const bottom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight;
        if (bottom) {
            const nextPage = page + 1;
            setPage(nextPage);
        }
    };

    return (
        <main className="user-main">
            <div className="sticky top-margin">
                <div>
                    <img className="user-icon" src={activeUser.profilePic} alt="User profile"/>
                </div>
                <Details username={activeUser.username}
                         fullName={`${activeUserDetails.firstName}  ${activeUserDetails.lastName}`}
                         birthday={activeUserDetails.birthday}
                         tweetsPerDay={(tweetsPerDay / 10) || 0}
                />
            </div>
            <div className="tweets-container tweets-container-details" onScroll={handleScroll}>
                {currentPageTweets}
            </div>
        </main>
    );
};

export default UserDetails;
