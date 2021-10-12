import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen";
const Build = () => {
    return(
        <>
            <ExploreScreen/>
            {/*<ExploreComponent/>*/}
            {/*<PostSummaryItem post={{*/}
            {/*    "topic": "Web Development",*/}
            {/*    "userName": "",*/}
            {/*    "title": "jQuery",*/}
            {/*    "time": "last week",*/}
            {/*    "image": "../../../images/jquery.png",*/}
            {/*    "tweets": "122K"*/}
            {/*}}/>*/}
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: '../../../images/virgin.png',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: 'virgingalactic',*/}
            {/*}}/>*/}
        </>
    )
};
export default Build;
