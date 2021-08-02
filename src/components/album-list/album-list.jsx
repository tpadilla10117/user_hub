import React, { useState, useEffect } from "react";
import { fetchUserAlbumList, BASE_URL } from "../utils";

const AlbumList = (props) => {
    

    const [userAlbums, setUserAlbumsState ] = useState(null);
    

   
    /* useEffect( () => { 
  
        async function fetchUserAlbums(userId) {
            try {
                
                const response = await fetch(`${BASE_URL}/users/${userId}/albums?_expand=user&_embed=photos`);
                response.json().then( result => setUserAlbumsState(result));
              
            } catch(error) {
              console.error(error);
            }
          };
        
        fetchUserAlbums();
        
      }, []); */

      /* fetchUserAlbumList(BASE_URL,1); */


      /* console.log("Here is user from album-list:",userAlbums) */
  
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