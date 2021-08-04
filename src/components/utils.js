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
    return fetch(`${url}/users/${userId}/albums?_expand=user&_embed=photos`).then( function (response) {
      /* console.log(response.json() ); */
      return response.json();
    }).catch(function (error) {
      console.error(error);
    })
  };

/* Fetches post-list data for an intended user: */
//
  export function fetchUserPostList() {

  }
  


  /* fetchUserPosts FUNCTION */
/* function fetchUserPosts(userId) {
  return fetchData(`${ BASE_URL }/users/${ userId }/posts?_expand=user`);
}
fetchUserPosts(1).then(console.log);  */

/* fetchPostsComments FUNCTION */
/* function fetchPostComments(postId) {
  return fetchData(`${ BASE_URL }/posts/${ postId }/comments`);
}
fetchPostComments(1).then(console.log); */