import React from "react";
import "./header.styles.scss";
import {HeaderPropsInterface} from "./headerInterfaces";

/**
 * Header section for logging out of the application
 * Returning to the feed/home screen and
 * viewing user information
 * @param props
 * @constructor
 */
const Header = (props: HeaderPropsInterface) => {

    return (<>
        <div className="header-container sticky">
            <nav>
                <div className="display-flex">
                    <div onClick={props.onHomeClickCallback} className="display-flex home-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             className="bi bi-house-fill svg-align" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd"
                                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                        <h4 className="header-h3-item">
                            Home
                        </h4>
                    </div>
                    <div onClick={props.onUserClickCallback} className="display-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-person-fill svg-align" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <h4 className="header-h3-item">
                            User Account
                        </h4>
                    </div>
                    <div onClick={props.onLogoutClickCallback} className="display-flex logout-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-box-arrow-left svg-align" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                            <path fillRule="evenodd"
                                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                        </svg>
                        <h4 className="header-h3-item">
                            Log Out
                        </h4>
                    </div>
                    <div className="display-flex twitter-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                             className="bi bi-twitter" viewBox="0 0 16 16">
                            <path
                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </div>
                </div>
            </nav>
        </div>
    </>)
};

export default Header;
