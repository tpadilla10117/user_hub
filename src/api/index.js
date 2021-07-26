const BASE_URL = "https://jsonplace-univclone.herokuapp.com";

//Testing fetch in console - works:

function fetchUsers() {
    return fetch(`${BASE_URL}/users`).then( function (response) {
       return response.json();
    }).catch(function (error) {
        console.error(error);
    })
};

fetchUsers().then(function (data) {
    console.log(data);
  });