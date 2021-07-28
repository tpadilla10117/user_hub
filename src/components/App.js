import React, { useState, useEffect} from 'react';
import './App.css';
import { SectionWrapper, MainWrapper, UserList, UserCard, AlbumList} from './index';

function App() {
 

  return (
    <div>
      <UserList content={ <UserCard /> }>
      </UserList>

      <MainWrapper content={
        <SectionWrapper id="instructions" className="active"/> && 
        <SectionWrapper id="post-list"/> && 
        <SectionWrapper id="album-list" content ={<AlbumList/>}/>}>
    
      </MainWrapper>

    </div>
  );
}

export default App;
