import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
        <ul class="list-group">
            <li class="list-group-item fw-bold">
                Who to follow
            </li>
            {
                who.map(who => {
                    return(
                      <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;