import React from 'react';
import './instructions.styles.scss';

const Instructions = () => {
    return (
        <>
        <h2>Welcome To Our App</h2>
          <p>On the left you'll see some users.</p>
          <p>Each has a button which will load posts they've made, and albums they've uploaded.</p>
          <p><b>Post View</b> posts have a toggle to show/hside comments.</p>
          <p><b>Album View</b> images are thumbnails, and when clicked open the full image in a new tab.</p>
        </>
    )
}

export default Instructions;
