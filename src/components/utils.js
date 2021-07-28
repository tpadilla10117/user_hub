/* fetchData function */
export function fetchData(url) {
    /* call fetch on the passed in url */
    return fetch(url).then(function (response) {
      /* using .then, convert incoming response JSON to an Object */
      return response.json();
      /* using .catch, log an error when we catch one */
    }).catch(function (error) {
      console.error(error);
    })
  }