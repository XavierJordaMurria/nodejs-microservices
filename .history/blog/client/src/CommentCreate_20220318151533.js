import React, { useState } from  "react";

const CommentCreate = ({ postId }) => {
    const [ comment, setComment ]
    return <div>
        <form>
            <div className="form-group">
                <label>New comment:</label>
                <input className="form-control"></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
};

export default CommentCreate;   