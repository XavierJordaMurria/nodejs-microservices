import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState({}) ;

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4000/posts");
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card" style={{width}}>

        </div>
    });
    
    
    return <div></div>
};

export default PostList;