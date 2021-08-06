import React, { useState, useEffect} from 'react';
import { SectionWrapper, MainWrapper, UserList, UserCard, AlbumCard, Instructions, PostCard} from './index';
import { BASE_URL, fetchUserAlbumList } from './utils.js';

function App() {

  //Thinking to use state to keep track of active class...it's a problem of lifting up state - common ancester is <App/>

  //state changes need to happen in <UserCard/> (triggered by custom-button click) & <SectionWrapper/> (need to change class to 'active')
  //Maybe it can be passed as a single prop to child components, then updated in each?
  //Only render component if it is isActiveSection === true
  
  const [ user, setUser ] = useState(null);
  const [ albumCardData, setAlbumCardData] = useState([]);
  const [ postCardData, setPostCardData] = useState([]);

  const [ componentVisibility, setComponentVisibility ] = useState(false);
  const [ activeClass, setActiveClass ] = useState(false); //used to toggle an active class
  const [ instructionComponentActive, setInstructionComponentActive ] = useState('active');
  const [ isActiveSectionVisible, setActiveSectionVisible ] = useState(false);

  
  //Consider making another form of state that runs a function to set the state on other components to false / a class "inactive"


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

  return (
    <>
      <UserList  isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible} content={ 
        
        <UserCard isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible} user={user} setUser={setUser}  fetchUserAlbumList={fetchUserAlbumList} activeClass={activeClass} setActiveClass={setActiveClass} albumCardData={albumCardData} setAlbumCardData={setAlbumCardData} postCardData={postCardData} setPostCardData={setPostCardData}   componentVisibility={componentVisibility} setComponentVisibility={setComponentVisibility} setInstructionComponentActive={setInstructionComponentActive} /> }>
          
      </UserList>

      <MainWrapper content={

        // 8/6 -> DATA retrieval is successful, now need to conditionally render components on DOM so that the data populates BEFORE DOM render:


        activeClass ?
        <SectionWrapper id="instructions" className={instructionComponentActive} content={<Instructions/> }  /> :

        
        <SectionWrapper id="post-list" className={!activeClass ? 'inactive': 'active'} content={  <PostCard user={user} postCardData={postCardData}/>   } /> 

      /*   <SectionWrapper id="album-list" className={activeClass ? 'active': 'inactive'} componentVisibility={componentVisibility} content ={ 
          <AlbumCard user={user} albumCardData={albumCardData} /> 
        }/> */
        
        
        
      }>
    
      </MainWrapper>

    </>
  );
}

export default App;
