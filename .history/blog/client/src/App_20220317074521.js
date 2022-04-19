import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";


const myAPP =  () => {
    return (
    <div className="container">
        <h1>Create Post</h1>
        <PostCreate/>
        <hr></hr>
        <h1></h1>
    </div>
    );
};

export default myAPP;