import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";

const PostSummaryList = () => {
    return(
        <ul class="list-group">
            {
                posts.map(post => {
                    return (
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;
