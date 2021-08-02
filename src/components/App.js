import React, { useState, useEffect} from 'react';
import './App.css';
import { SectionWrapper, MainWrapper, UserList, UserCard, AlbumCard} from './index';
import { BASE_URL, fetchUserAlbumList } from './utils.js';

function App() {

  //Thinking to use state to keep track of active class...it's a problem of lifting up state - common ancester is <App/>

  //state changes need to happen in <UserCard/> (triggered by custom-button click) & <SectionWrapper/> (need to change class to 'active')
  //Maybe it can be passed as a single prop to child components, then updated in each?
  //Only render component if it is isActiveSection === true
  const [ isActiveSectionVisible, setActiveSectionVisible ] = useState(false);
  const [ user, setUser ] = useState(null);
  /* const [ activeProject, setActiveProject ] = useState(null); */


  useEffect( () => { 

    async function fetchUsers() {
        try {
            
            const response = await fetch(`${BASE_URL}/users`);
            response.json().then( result => setUser(result));
    
        } catch(error) {
          console.error(error);
        }
      };
    
    fetchUsers();
    
  }, []);
  
 
  //This is a toggler - handler that changes the state of isActiveSection to true:
  function isActiveHandler() {
    if (isActiveSectionVisible === false) {
      
      setActiveSectionVisible(true);
    }
    console.log("Here is the result:", isActiveSectionVisible);
  };

  /*  Helper Function to toggle active classNames in the button based on some value: */
    function toggleActiveClass() {
        console.log("clicked")
        return /* isActiveSectionVisible === false */ user ? "active button-active": "button-inactive"
    }

  

  return (
    <div>
      <UserList  isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible} content={ <UserCard isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible} user={user} setUser={setUser} toggleActiveClass={toggleActiveClass} fetchUserAlbumList={fetchUserAlbumList}/> }>
      </UserList>

      <MainWrapper content={
        <SectionWrapper id="instructions" className="active"/> && 
        <SectionWrapper id="post-list" /* className="" */ /* content={'postlist'} */ /> && 
        <SectionWrapper id="album-list" /* className="" */ content ={<AlbumCard user={user}/>}/>}> {/* Needs 'active' class */}
    
      </MainWrapper>

    </div>
  );
}

export default App;
