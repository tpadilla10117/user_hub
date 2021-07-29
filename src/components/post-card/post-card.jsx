import React from 'react';

/* The post-card components: */

const PostCard = ( { children, ...otherprops}) => (
    <div class="post-card">
        <header>
            <h3>{}</h3>
            <h3>{}</h3>
        </header>
        <p>{}</p>
            <footer>
            <div class="comment-list"></div>
            {/* <a href="#" class="toggle-comments">(<span class="verb">show</span> comments)</a> */}
        </footer>
    </div>
) 

export default PostCard;