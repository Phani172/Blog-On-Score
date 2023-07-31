import React, { useState } from 'react';
import './Blogpage.css';
import { Link } from 'react-router-dom';
const Blogpage = () => {
    const [blogContent, setBlogContent] = useState('');

    const handleBlogChange = (e) => {
        setBlogContent(e.target.value);
    };

    const handleBlogSubmit = (e) => {
        e.preventDefault();
        // Here, you can implement the logic to submit the blog content to your backend
        console.log('Blog content:', blogContent);
        // Clear the blog content after submission
        setBlogContent('');
    };

    return (
        <div>

            <form onSubmit={handleBlogSubmit}>
                <h2>Carve your own Blog about any match</h2>
                <textarea
                    rows="20"
                    cols="100"
                    value={blogContent}
                    onChange={handleBlogChange}
                    placeholder="Write your blog here..."
                    required
                />
                <br />
                <button type="submit" id='sub' >Submit Blog</button>
            </form>
            <Link to="/Scorepage">
                <button type="submit" id='back' >back</button>
            </Link>
        </div>
    );
};

export default Blogpage;
