import React, { useState, useEffect} from 'react';
import { SectionWrapper, MainWrapper, UserList, UserCard, AlbumCard, Instructions} from './index';
import { BASE_URL, fetchUserAlbumList } from './utils.js';

function App() {

  //Thinking to use state to keep track of active class...it's a problem of lifting up state - common ancester is <App/>

  //state changes need to happen in <UserCard/> (triggered by custom-button click) & <SectionWrapper/> (need to change class to 'active')
  //Maybe it can be passed as a single prop to child components, then updated in each?
  //Only render component if it is isActiveSection === true
  const [ isActiveSectionVisible, setActiveSectionVisible ] = useState(false);
  const [ user, setUser ] = useState(null);
  const [ albumCardData, setAlbumCardData] = useState([]);
  const [ componentVisibility, setComponentVisibility ] = useState(false);
  const [ activeClass, setActiveClass ] = useState(false); //used to toggle an active class


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
  
    

    //1) on click, makes the isActiveSection TRUE or FALSE
    //2) If isActiveSectionVisible, make the classname to TRUE && switch statement that returns appropriate component, else make it an ""
  

  return (
    <>
      <UserList  isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible} content={ 
        
        <UserCard isActiveSectionVisible={isActiveSectionVisible} setActiveSectionVisible={setActiveSectionVisible} user={user} setUser={setUser}  fetchUserAlbumList={fetchUserAlbumList} activeClass={activeClass} setActiveClass={setActiveClass} albumCardData={albumCardData} setAlbumCardData={setAlbumCardData} componentVisibility={componentVisibility} setComponentVisibility={setComponentVisibility} /> }>
          
      </UserList>

      <MainWrapper content={

        <SectionWrapper id="instructions"    content={<Instructions/> }       /> /* &&
       
        <SectionWrapper id="post-list" className={!activeClass ? 'inactive': 'active'}  /> && 
        
        <SectionWrapper id="album-list" className={activeClass ? 'active': 'inactive'} content ={ 
          <AlbumCard user={user} albumCardData={albumCardData} /> 
        }/> */
        
      }>
    
      </MainWrapper>

    </>
  );
}

export default App;

//rednering the album component:
  //1) maybe render the component in the User-card component, so it renders based on the button click
