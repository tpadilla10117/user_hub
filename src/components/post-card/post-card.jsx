import React from 'react';
import './post.card.styles.scss';

/* The post-card components: */

const PostCard = ( props ) => {
    const {user, postCardData} = props;

console.log('Calling postcard component:', postCardData);
console.log('Looking for postcard data in post-card component:', postCardData[0]);



    return (
        <>
            {user && user.map( post => (
                <div className="post-card" key={'user-' + post.id}>
                    <header>
                        <h3>{post.title}</h3>
                        <h3>{post.user}</h3>{/* needs to be post.user.username */}
                    </header>
                    <p>{post.body}</p>
                        <footer>
                        <div className="comment-list"></div>
                        {/* <a href="#" class="toggle-comments">(<span class="verb">show</span> comments)</a> */}
                    </footer>
                </div>
            ))}
        </>
    );
};

export default PostCard;



