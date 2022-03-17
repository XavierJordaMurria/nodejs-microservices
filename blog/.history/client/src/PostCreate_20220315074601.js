import React, { useState } from "react";
import axios from "axios";

const PostCreate =  () => {
    const [title, setTitle]
    return <div>
        <form>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control"></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
};

export default PostCreate;