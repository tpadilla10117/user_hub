import React, { useState, useEffect} from 'react';
import './App.css';
import { SectionWrapper, MainWrapper, UserList, UserCard, AlbumList} from './index';

function App() {

  //Thinking to use state to keep track of active class...it's a problem of lifting up state - common ancester is <App/>

  //state changes need to happen in <UserCard/> (triggered by custom-button click) & <SectionWrapper/> (need to change class to 'active')
  //Maybe it can be passed as a single prop to child components, then updated in each?
  //Only render component if it is isActiveSection === true
  const [ isActiveSectionVisible, setActiveSectionVisible ] = useState(false);
  /* const [ activeProject, setActiveProject ] = useState(null); */
  
 
  //This is a toggler - handler that changes the state of isActiveSection to true:
  function isActiveHandler() {
    if (isActiveSectionVisible === false) {
      
      setActiveSectionVisible(true);
    }
    console.log("Here is the result:", isActiveSectionVisible);
  };

  

  return (
    <div>
      <UserList  isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible} content={ <UserCard isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible}/> }>
      </UserList>

      <MainWrapper content={
        <SectionWrapper id="instructions" className="active"/> && 
        <SectionWrapper id="post-list" /* content={'postlist'} */ /> && 
        <SectionWrapper id="album-list" content ={<AlbumList/>}/>}> {/* Needs 'active' class */}
    
      </MainWrapper>

    </div>
  );
}

export default App;
