import React from "react";

import "./userPage.styles.scss";
import Details from "../../components/details/details";
import {useSelector} from "react-redux";
import {getActiveUser, getUserDetailsById} from "../../redux/selector";
import {GlobalStateInterface} from "../../interfaces/globalStateInterface";

const UserDetails = () => {
    const activeUser = useSelector(getActiveUser);
    const activeUserDetails = useSelector((state: GlobalStateInterface) => getUserDetailsById(state, activeUser.id));
    return (
        <main className="user-main">
            <div>
                <img className="user-icon" src={activeUser.profilePic}/>
            </div>
            <Details username={activeUser.username}
                     fullName={`${activeUserDetails.firstName} ${activeUserDetails.lastName}`}
                     birthday={activeUserDetails.birthday}
            />
        </main>
    );
};

export default UserDetails;
