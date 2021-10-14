import React from "react";
import {useSelector} from "react-redux";

const selectAllPosts = (state) => state.posts.posts;

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    return(
        <h1>Post List</h1>
    )
};

export default PostList;