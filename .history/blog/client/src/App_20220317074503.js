import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";


const myAPP =  () => {
    return (
    <div className="container">
        <h1>Create Post</h1>
        <PostCreate/>
    </div>
    );
};

export default myAPP;