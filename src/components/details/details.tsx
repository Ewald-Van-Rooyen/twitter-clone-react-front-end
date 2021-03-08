import React from "react";
import "./details.styles.scss";

interface DetailsPropsInterface {
    username: string;
    fullName: string;
    birthday: string
    tweetsPerDay: number;
}

const Details = (props: DetailsPropsInterface) => {
    return (<>
        <div className="user-container">
            <div className="display-flex info-line-item">
                <label className="label-main">Username:</label>
                <label className="label-info twitter-color">{props.username}</label>
            </div>
            <div className="display-flex info-line-item">
                <label className="label-main">Fullname:</label>
                <label className="label-info">{props.fullName}</label>
            </div>
            <div className="display-flex info-line-item">
                <label className="label-main">Birthday:</label>
                <label className="label-info">{props.birthday}</label>
            </div>

            <div className="display-flex info-line-item">
                <label className="label-main">Tweets per day over the last 10 days:</label>
                <label className="label-info">{props.tweetsPerDay}</label>
            </div>
        </div>
    </>);
};

export default Details;
