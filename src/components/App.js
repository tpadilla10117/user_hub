import React, { useState, useEffect } from 'react';
import './App.css';
import { SectionWrapper, UserList, UserCard} from './index';

function App() {

  //Should I make API call for user data here?
  const BASE_URL = "https://jsonplace-univclone.herokuapp.com";

  //Testing fetch in console - works:
  
  async function fetchUsers() {
      return fetch(`${BASE_URL}/users`).then( function (response) {
         return response.json().then(function (data) { return data } )
      }).catch(function (error) {
          console.error(error);
      })
  };
  
  /* fetchUsers().then(function (data) {
    console.log(data);
    return data;
  }); */

  /* useEffect( () => {
    setUser(fetchUsers() );
  }, []) */

  console.log( "Here is the fetchUser invoke:", fetchUsers() )

  const [ user, setUser ] = useState( null);

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
