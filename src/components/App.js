import React, { useState, useEffect } from 'react';
import './App.css';
import { SectionWrapper, UserList, UserCard} from './index';

function App() {

 


  return (
    <div>
      <UserList content={ <UserCard /> }>
      </UserList>
      <SectionWrapper id="instructions" className="active">
        
      </SectionWrapper>
      
      <SectionWrapper id="post-list"></SectionWrapper>
      
      <SectionWrapper id="album-list"></SectionWrapper>

    </div>
  );
}

export default App;
