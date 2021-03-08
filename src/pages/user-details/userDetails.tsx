import React from "react";

import "./userPage.styles.scss";
import Details from "../../components/details/details";
import {useSelector} from "react-redux";
import {getActiveUser, getTweets, getUserDetailsById} from "../../redux/selectors";
import {GlobalStateInterface} from "../../interfaces/globalStateInterface";
import Tweet from "../../components/tweet/tweet";

const UserDetails = () => {
    const activeUser = useSelector(getActiveUser);
    const activeUserDetails = useSelector((state: GlobalStateInterface) => getUserDetailsById(state, activeUser.id));
    const tweets = useSelector(getTweets);

    const tweetsElements = tweets.map((tweet) => {
        if (tweet.userId === activeUser.id) {
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
            <div >
                <img className="user-icon" src={activeUser.profilePic} alt="User profile"/>
            </div>
            <Details username={activeUser.username}
                     fullName={`${activeUserDetails.firstName} ${activeUserDetails.lastName}`}
                     birthday={activeUserDetails.birthday}
            />
            {tweetsElements}
        </main>
    );
};

export default UserDetails;
