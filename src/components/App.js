import React, { useState, useEffect} from 'react';
import './App.css';
import { SectionWrapper, MainWrapper, UserList, UserCard, AlbumList} from './index';

function App() {

  //Thinking to use state to keep track of active class...it's a problem of lifting up state - common ancester is <App/>

  //state changes need to happen in <UserCard/> (triggered by custom-button click) & <SectionWrapper/> (need to change class to 'active')
  //Maybe it can be passed as a single prop to child components, then updated in each?
  //Only render component if it is isActiveSection === true
  const [ isActiveSection, setActiveSection ] = useState(false);

  //This is where I'll put a toggle handler that handles the setActiveSection
 

  return (
    <div>
      <UserList content={ <UserCard /> }>
      </UserList>

      <MainWrapper content={
        <SectionWrapper id="instructions" className="active"/> && 
        <SectionWrapper id="post-list" /* content={'postlist'} */ /> && 
        <SectionWrapper id="album-list" content ={<AlbumList/>}/>}>
    
      </MainWrapper>

    </div>
  );
}

export default App;
