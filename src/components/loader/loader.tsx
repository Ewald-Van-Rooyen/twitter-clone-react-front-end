import React from "react";
import "./loader.styles.scss";

/**
 * Loader component used to display active communication with the back end
 * I did not create this, I found it on codepen
 * @constructor
 */
const Loader = () => {
    return (
        <>
            <svg version="1.1" id="twitter-bird" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 18 15" enableBackground="new 0 0 18 15" xmlSpace="preserve">
                <path id="bird-body" fill="#1ca1f2" d="M5.4,11.4c-1.3,1-2.9,1.6-4.6,1.6c-0.3,0-0.6,0-0.9-0.1c1.6,1,3.6,1.7,5.7,1.7
	c6.8,0,10.5-5.6,10.5-10.5c0-0.2,0-0.3,0-0.5c0.7-0.5,1.3-1.2,1.8-1.9c-0.6,0.3-1.3,0.5-2,0.6c0.8-0.5,1.3-1.2,1.6-2
	C16.8,0.7,16,1,15.2,1.2C14.5,0.4,13.5,0,12.5,0c-2,0-3.7,1.7-3.7,3.7c0,0.3,0,0.6,0.1,0.8C7.2,5.9,5.2,10.9,5.4,11.4"/>
                <path id="bird-wing" fill="#1ca1f2" d="M8.9,4.5C5.8,4.4,3.1,2.9,1.3,0.7C0.9,1.2,0.8,1.9,0.8,2.5c0,1.3,0.7,2.4,1.6,3.1
	c-0.6,0-1.2-0.2-1.7-0.5l0,0c0,1.8,1.3,3.3,3,3.6C3.4,8.9,3,8.9,2.7,8.9c-0.2,0-0.5,0-0.7-0.1c0.5,1.5,1.8,2.5,3.4,2.6
	C5.3,10.8,8.9,4.5,8.9,4.5"/>
            </svg>
        </>
    );
};

export default Loader;
