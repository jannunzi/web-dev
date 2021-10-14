import React from "react";
import {useSelector} from "react-redux";
import PostListItem from "./PostListItem";

const selectAllPosts = (state) => state.posts.posts;

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    return(
        <ul className="list-group">
            {
                posts.map(post =>
                    <PostListItem post={post}/>
                )
            }
        </ul>
    )
};

export default PostList;