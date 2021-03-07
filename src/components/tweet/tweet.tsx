import React, {useState} from "react";

import "./tweet.style.scss";
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserById, getUserDetailsById} from "../../redux/selector";
import {TweetInterface} from "../../interfaces/tweetInterface";
import {GlobalStateInterface} from "../../interfaces/globalStateInterface";
import {UserInterface} from "../../interfaces/userInterface";
import TweetService from "../../services/tweetService";
import Loader from "../loader/loader";

/**
 * Tweet component that allows for a user to like someone elses tweet
 * Remove their own tweets
 * @param props typeof TweetInterface
 * @constructor
 */
const Tweet = (props: TweetInterface) => {
    const [showLoader, setShowLoader] = useState(false);
    const activeUser: UserInterface = useSelector(getUser);
    const user = useSelector((state: GlobalStateInterface) => getUserById(state, props.userId));
    const details = useSelector((state: GlobalStateInterface) => getUserDetailsById(state, user.usersDetailsId));
    const dispatch = useDispatch();

    /**
     * Updates a tweets claps/likes
     * I stayed with like due to net getting a claps icon from
     * bootstrap icons that I liked
     */
    const likesClickCallback = (): void => {
        // An anti vanity quirk, you should not be able to like your own tweet
        if (activeUser.id !== user.id) {
            const alteredTweet = {
                id: props.id,
                claps: props.claps + 1,
                tweet: props.tweet,
                userId: props.userId,
                date: props.date
            };

            setShowLoader(true);
            // Alter the tweet via the back end
            dispatch(TweetService.putTweet(alteredTweet));
            setShowLoader(false);
        }
    };

    /**
     * Deletes a tweet if it is the current users
     * User should not be able to even see tweets
     * that are not assigned to them.
     */
    const deleteClickCallback = (): void => {
        // You should only be able to delete your own tweets
        if (activeUser.id === user.id) {
            setShowLoader(true);
            dispatch(TweetService.deleteTweet(props.id));
            setShowLoader(false);
        }
    };

    return (
        <div className="horizontal-container display-rows">
            <div className="display-flex">
                <img src={`${user.profilePic}`} alt="" className="avatar"/>
                <div className="tweet-header-info">
                    {details.firstName + details.lastName}
                    <span>{user.username}</span>
                    <span>{props.date}</span>
                    <p> {props.tweet}</p>
                </div>
            </div>
            <div className="tweet-icons">
                <div className="likes">
                    <div onClick={likesClickCallback}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-heart tweet-likes-icon-svg" viewBox="0 0 16 16">
                            <path
                                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </div>
                    <div className="likes-count">
                        {props.claps}
                    </div>
                </div>
                {activeUser.id === user.id &&
                (<div className="delete">
                    <div onClick={deleteClickCallback}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-trash tweet-delete-icon-svg" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </div>
                </div>)
                }
            </div>
            {showLoader && <Loader/>}
        </div>

    );
};

export default Tweet;
