/* FILE FOR ABSTRACTING AWAY API CALLS & OTHER FUNCTIONALITY: */

/* The URL I fetch from */
  export const BASE_URL = "https://jsonplace-univclone.herokuapp.com";

/* fetchData function for abstract get requests / fetches: */
  export function fetchData(url) {
      /* call fetch on the passed in url */
      return fetch(url).then(function (response) {
        /* using .then, convert incoming response JSON to an Object */
        return response.json();
        /* using .catch, log an error when we catch one */
      }).catch(function (error) {
        console.error(error);
      })
    };

/* Fetches album-list data (array of albums) for an intended user: */
//Brings back id, title, userId
  export function fetchUserAlbumList(url, userId) {
    return fetch(`${url}/users/${userId}/albums`).then( function (response) {
      console.log(response.json() );
      /* return response.json(); */
    }).catch(function (error) {
      console.error(error);
    })
  };
  
