import React, { useState, useEffect } from 'react';
import './App.css';
import { SectionWrapper, UserList, UserCard} from './index';

function App() {

  //Should I make API call for user data here?
  const BASE_URL = "https://jsonplace-univclone.herokuapp.com";
  const [ user, setUser ] = useState(fetchUsers() );
  //This is running an infinite loop...
  
/*   function fetchUsers() {
      fetch(`${BASE_URL}/users`).then( response => response.json() )
      .then( result => setUser(result))
      .catch(function (error) {
          console.error(error);
      })
  }; */

  async function fetchUsers() {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const json = await response.json();
      console.log("Here is the result of the async function:", json);
      /* return setUser(json); */
      return json; //can return array data if accessed here
    } catch(error) {
      console.error(error);
    }
  };

  /* fetchUsers(); */

 /*  useEffect( () => {
    fetchUsers();
  }, []); */
  
  /* fetchUsers().then(function (data) {
    console.log(data);
    return data;
  }); */

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
