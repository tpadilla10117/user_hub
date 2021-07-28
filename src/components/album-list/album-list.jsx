import React, { useState, useEffect } from "react";

const AlbumList = (props) => {
    

    const [userAlbums, setUserAlbumsState ] = useState(null);
    const BASE_URL = "https://jsonplace-univclone.herokuapp.com";

   
    useEffect( () => { 
  
        async function fetchUserAlbums(userId) {
            try {
                
                const response = await fetch(`${BASE_URL}/users/${userId}/albums?_expand=user&_embed=photos`);
                response.json().then( result => setUserAlbumsState(result));
              
            } catch(error) {
              console.error(error);
            }
          };
        
        fetchUserAlbums();
        
      }, []);

      console.log("Here is user from album-list:",userAlbums)
  
 /*    useEffect( () => {
        function fetchUserAlbumList() {

        };
    }), []; */
    

    return (
        <>
        </>
    )

};

export default AlbumList