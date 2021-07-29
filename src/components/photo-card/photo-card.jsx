import React from 'react';

/* The photo-card components: */

const PhotoCard = ( { children, ...otherprops}) => (
    <div class="photo-card">
        <a href="${}" target="_blank">
        <img src="${}"/>
        <figure>{}</figure>
        </a>
  </div>
) 

export default PhotoCard;