import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchData = async (event) => {
        event.preventDefault();
        await axios.get(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
    
        setContent('');
      };

    return <div>

    </div>
 };

export default CommentList;