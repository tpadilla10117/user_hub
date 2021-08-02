import React from 'react';

/* The album-card components: */

const AlbumCard = (props) => {

    const {user} = props;

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

    return (
        <>
        {user && user.map(renderAlbumCard)}
        </>
    )
} 

export default AlbumCard;



 /* To template user-cards in the UI: */
/*  const renderUser = (user, index) => {
    return(
        <div className="user-card" key={"user-" + index}>
        <header>
            <h2>{user.name}</h2>
        </header>
        <section className="company-info">
            <p><b>Contact:</b>{user.email}</p>
            <p><b>Works for:</b>{user.company.name}</p>
            <p><b>Company creed:</b>{user.company.catchPhrase}</p>
        </section>
        <footer>
            
            <CustomButton children={`POSTS BY ${user.username}`} toggleActiveClass onClick={() => toggleActiveClass()}/>
            <CustomButton children={`ALBUMS BY ${user.username}`} onClick={ () => fetchUserAlbumList(BASE_URL, user.id ) }/>
        </footer>
    </div>
    )
};

return (
    <>
    {user && user.map(renderUser)}; 
    </>
)
} */


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