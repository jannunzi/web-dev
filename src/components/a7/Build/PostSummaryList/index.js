import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const posts = useSelector((state) => state.posts);
    return(
        <ul className="list-group">
            {
                posts.map((post, idx) => {
                    return (
                        <PostSummaryItem key={idx} post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;
