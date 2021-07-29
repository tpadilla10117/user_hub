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