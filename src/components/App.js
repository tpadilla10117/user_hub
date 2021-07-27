import React, { useState, useEffect } from 'react';
import './App.css';
import { SectionWrapper, UserList, UserCard} from './index';

function App() {

  //Should I make API call for user data here?
  const BASE_URL = "https://jsonplace-univclone.herokuapp.com";

  //Testing fetch in console - works:
  
  function fetchUsers() {
      return fetch(`${BASE_URL}/users`).then( function (response) {
         return response.json();
      }).catch(function (error) {
          console.error(error);
      })
  };
  /* fetchUsers().then(function (data) {
    console.log(data);
    return data
  }); */

  const [ user, setUser ] = useState( fetchUsers() );
console.log("Here are my users:", user)




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
