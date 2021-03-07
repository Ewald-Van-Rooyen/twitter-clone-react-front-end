import React from "react";
import "./details.scss";

interface DetailsPropsInterface {
    username: string;
    fullName: string;
    birthday: string
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
                <label className="label-main">Bio:</label>
                <label className="label-info">During World War II, Steve Rogers decides to volunteer in an experiment
                    that transforms his weak body. He must now battle a secret Nazi organisation headed by
                    Johann Schmidt to defend his nation.</label>
            </div>
        </div>
    </>);
};

export default Details;
