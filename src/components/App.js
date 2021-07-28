import React, { useState, useEffect } from 'react';
import './App.css';
import { SectionWrapper, UserList, UserCard} from './index';

function App() {

  //Should I make API call for user data here?
  const BASE_URL = "https://jsonplace-univclone.herokuapp.com";
  const [ user, setUser ] = useState(null);
  //Testing fetch in console - works:
  
  function fetchUsers() {
      fetch(`${BASE_URL}/users`).then( response => response.json() )
      .then( result => setUser(result))
      .catch(function (error) {
          console.error(error);
      })
  };

/*   async function fetchUsers() {
    
    const response = await fetch(`${BASE_URL}/users`);
    const json = await response.json();
    console.log("Here is the data in the asyc call:", json[0]);
    setUser(json.data)
    console.log("Here is the user data in the asyc call:", json.data);
  } */
  
  /* fetchUsers().then(function (data) {
    console.log(data);
    return data;
  }); */

  /* fetchUsers(); */
  /* useEffect( function effectFunction() {
    fetchUsers();
  }, []); */
  /* fetchUsers() */


console.log("Here is my user state:", user)




  return (
    <div>
      <UserList content={ <UserCard user={user}/> }>
      </UserList>
      <SectionWrapper id="instructions" className="active">
        
      </SectionWrapper>
      
      <SectionWrapper id="post-list"></SectionWrapper>
      
      <SectionWrapper id="album-list"></SectionWrapper>

    </div>
  );
}

export default App;
