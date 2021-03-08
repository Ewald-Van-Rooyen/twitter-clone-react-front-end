import React from "react";

import "./userPage.styles.scss";
import Details from "../../components/details/details";
import {useSelector} from "react-redux";
import {getActiveUser, getTweets, getUserDetailsById} from "../../redux/selectors";
import {GlobalStateInterface} from "../../interfaces/globalStateInterface";
import Tweet from "../../components/tweet/tweet";

const isTweetLastTenDays = (tweetDateString: string) => {
    const tweetDate = Date.parse(tweetDateString);
    const currentDate = new Date().getTime();
    const days = 10;
    const lastDate = new Date(currentDate - (days * 24 * 60 * 60 * 1000)).getTime();

    return tweetDate < currentDate && tweetDate > lastDate;
};

const UserDetails = () => {
    const activeUser = useSelector(getActiveUser);
    const activeUserDetails = useSelector((state: GlobalStateInterface) => getUserDetailsById(state, activeUser.id));
    const tweets = useSelector(getTweets);

    let tweetsPerDay = 0;

    const tweetsElements = tweets.map((tweet) => {
        if (tweet.userId === activeUser.id) {
            if (isTweetLastTenDays(tweet.date)) tweetsPerDay++;

            return <Tweet key={`${tweet.id}${activeUser.username}`}
                          id={tweet.id}
                          tweet={tweet.tweet}
                          claps={tweet.claps}
                          date={tweet.date} userId={tweet.userId}/>
        } else {
            return null;
        }
    });

    return (
        <main className="user-main">
            <div>
                <img className="user-icon" src={activeUser.profilePic} alt="User profile"/>
            </div>
            <Details username={activeUser.username}
                     fullName={`${activeUserDetails.firstName} ${activeUserDetails.lastName}`}
                     birthday={activeUserDetails.birthday}
                     tweetsPerDay={(tweetsPerDay / 10) || 0}
            />
            {tweetsElements}
        </main>
    );
};

export default UserDetails;
