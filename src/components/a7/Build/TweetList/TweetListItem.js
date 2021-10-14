import React from "react";

const TweetListItem = ({tweet}) => {
    return(
        <li className="list-group-item">
            <h2>Tweet List Item</h2>
            {JSON.stringify(tweet)}
        </li>
    );
};

export default TweetListItem;
