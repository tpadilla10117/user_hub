import React from 'react';

/* The album-card components: */

const AlbumCard = ( { children, ...otherprops}) => (
    <div class="album-card">
        <header>
            <h3>{} by {} </h3>
        </header>
        <section class="photo-list">
            {/* <div class="photo-card"></div> */}
        </section>
    </div>
) 

export default AlbumCard;


/* render a single album */
/* function renderAlbum(album) {

    album.photos.forEach(function(photo) {
      $('.photo-list').append(renderPhoto(photo))
    });

    const albumTemplate = $(`<div class="album-card">
    <header>
      <h3>${album.title} by ${album.user.username}</h3>
    </header>
    <section class="photo-list">
      <!-- ... -->
    </section>
  </div>`);

  return albumTemplate;
} */