import React from "react";
import Capture from "../components/capture/capture";
import Tweet from "../components/tweet/tweet";

const Feed = () => {
    return (
        <>
            <Capture/>
            <Tweet fullname={"Ewald Van Rooyen"} username={"@Ewald42"}
                   profilePic={"https://avatarfiles.alphacoders.com/174/174225.jpg"} date={"2015-01-17"}
                   tweet={"duis do in ea veniam nulla excepteur voluptate esse fugiat quis mollit occaecat Lorem adipisicing in sit ad aute occaecat"}
                   claps={50}/>
        </>
    );
};

export default Feed;
