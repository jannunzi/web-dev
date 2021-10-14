import React from "react";

const PostListItem = ({post}) => {
    return(
        <li className="list-group-item">
            <h2>Post List Item</h2>
            {JSON.stringify(post)}
        </li>
    );
};

export default PostListItem;
