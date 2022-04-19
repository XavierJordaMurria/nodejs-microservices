import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchData = async (event) => {
        event.preventDefault();
        const resawait axios.get(`http://localhost:4001/posts/${postId}/comments`);
    
        setContent('');
      };

    return <div>

    </div>
 };

export default CommentList;