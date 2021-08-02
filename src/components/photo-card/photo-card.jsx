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

/* render a single photo */
/* function renderPhoto(photo) {
  const photoTemplate = $(`<div class="photo-card">
  <a href="${photo.url}" target="_blank">
    <img src="${photo.thumbnailUrl}">
    <figure>${photo.title}</figure>
  </a>
</div>`)

return photoTemplate;

} */