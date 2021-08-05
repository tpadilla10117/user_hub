import React from 'react';
import './album-card.styles.scss';

/* The album-card components: */

const AlbumCard = (props) => {

    const {user, albumCardData} = props;

    const renderAlbumCard = (user, index) => {
        return (
            <div className="album-card" key={"user-"+ index}>
                <header>
                    <h3>{} by {user.username} </h3>
                </header>
                <section className="photo-list">
                    {/* <div class="photo-card"></div> */}
                </section>
            </div>
        )
    };
/*This renders upon initial app render:  */
//We need it to render ONLY if the appropriate button is clicked
    return (
        <>
        {/* {user && user.map(renderAlbumCard)} */} 
        {user && user.map(album => (
            <div className="album-card" key={"user-"+ album.id}>
                    <header>
                        <h3>{album.title} by {album.username} </h3>
                    </header>
                    <section className="photo-list">
                        {/* <div class="photo-card"></div> */}
                    </section>
            </div>
        ))}
        
        </>
    )
} 

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