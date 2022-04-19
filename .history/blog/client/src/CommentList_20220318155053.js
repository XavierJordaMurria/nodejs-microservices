import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
    const [content, setContent] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
    
        setContent('');
      };

    return <div>

    </div>
 };

export default CommentList;