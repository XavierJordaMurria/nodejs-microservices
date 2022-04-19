import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState({}) ;

    const fetchPosts = async () => {
        const rest = await axios.get("http://localhost:4000")
    };
    return <div></div>
};

export default PostList;